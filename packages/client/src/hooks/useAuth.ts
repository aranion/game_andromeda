import { useNavigate } from 'react-router-dom';
import {
  useLazyCheckAuthUserQuery,
  useLogoutMutation,
  useSignInMutation,
  useSignUpMutation,
} from 'src/store/auth/api';
import { useActions } from './useActions';
import { authSelectors } from 'src/store/auth';
import { useTypeSelector } from './useTypeSelector';
import { RouterList } from 'src/router/routerList';
import type { RequestSignIn, RequestSignUp } from '../store/auth/type';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import type { SerializedError } from '@reduxjs/toolkit';

export const useAuth = () => {
  const { isAuth, isLoadingAuth } = useTypeSelector(authSelectors.allAuth);

  const { setIsAuth, resetUserState, setIsLoadingAuth, setUserData } =
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
      .then(({ isSuccess, data }) => {
        setIsAuth(isSuccess);

        if (isSuccess) {
          setUserData(data);
        }
      })
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
            navigate(RouterList.GAME);
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
            const { id } = res.data;

            setUserData({ id });
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
