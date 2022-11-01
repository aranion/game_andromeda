import { RouterList } from '../router/routerList';
import { useNavigate } from 'react-router-dom';
import { authSelectors } from '../store/auth';
import {
  useLazyCheckAuthUserQuery,
  useLogoutMutation,
  useSignInMutation,
  useSignUpMutation,
} from '../store/auth/api';
import { useActions } from './useActions';
import { useTypeSelector } from './useTypeSelector';
import type { RequestSignIn, RequestSignUp } from '../store/auth/type';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import type { SerializedError } from '@reduxjs/toolkit';

export const useAuth = () => {
  const { isAuth, isLoadingAuth } = useTypeSelector(authSelectors.allAuth);

  const { setIsAuth, resetUserState, setIsLoadingAuth, setUserId } =
    useActions();

  const navigate = useNavigate();

  const [fetchIsAuth] = useLazyCheckAuthUserQuery();
  const [fetchLogout] = useLogoutMutation();
  const [fetchSignIn] = useSignInMutation();
  const [fetchSignUp] = useSignUpMutation();

  const error = (error: FetchBaseQueryError | SerializedError) => {
    if ('message' in error) {
      throw new Error(error.message);
    } else {
      console.error(error);
    }
  };

  const checkIsAuth = () => {
    setIsLoadingAuth(true);

    fetchIsAuth(null)
      .then(({ isSuccess }) => setIsAuth(isSuccess))
      .catch(console.error)
      .finally(() => {
        setIsLoadingAuth(false);
      });
  };

  const signIn = (params: RequestSignIn) => {
    if (!isAuth) {
      fetchSignIn(params)
        .then(res => {
          if ('data' in res) {
            setIsAuth(true);
          } else {
            error(res.error);
          }
        })
        .catch(console.error);
    }
  };

  const signUp = (params: RequestSignUp) => {
    if (!isAuth) {
      fetchSignUp(params)
        .then(res => {
          if ('data' in res) {
            setUserId(res.data.id);
            checkIsAuth();
            navigate(RouterList.GAME);
          } else {
            error(res.error);
          }
        })
        .catch(console.error);
    }
  };

  const logout = () => {
    if (isAuth) {
      fetchLogout(null)
        .then(res => {
          if ('data' in res) {
            setIsAuth(false);
            resetUserState();
            navigate(RouterList.SIGN_IN);
          } else {
            error(res.error);
          }
        })
        .catch(console.error);
    }
  };

  return { signIn, signUp, logout, checkIsAuth, isAuth, isLoadingAuth };
};