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

export const useAuth = () => {
  const { isAuth, isLoadingAuth } = useTypeSelector(authSelectors.allAuth);

  const { setIsAuth, resetUserState, setIsLoadingAuth, setUserId } =
    useActions();

  const navigate = useNavigate();

  const [fetchIsAuth] = useLazyCheckAuthUserQuery();
  const [fetchLogout] = useLogoutMutation();
  const [fetchSignIn] = useSignInMutation();
  const [fetchSignUp] = useSignUpMutation();

  const checkIsAuth = () => {
    setIsLoadingAuth(true);

    fetchIsAuth(null)
      .then(({ isSuccess }) => setIsAuth(isSuccess))
      })
      .catch(console.log)
      .finally(() => {
        setIsLoadingAuth(false);
      });
  };

  const signIn = (params: RequestSignIn) => {
    if (!isAuth) {
      fetchSignIn(params).then(res => {
        if ('data' in res) {
          setIsAuth(true);
        } else {
          console.log(res.error);
        }
      });
    }
  };

  const signUp = (params: RequestSignUp) => {
    if (!isAuth) {
      fetchSignUp(params).then(res => {
        if ('data' in res) {
          setUserId(res.data.id);
          checkIsAuth();
          navigate(RouterList.GAME);
        } else {
          console.log(res.error);
        }
      });
    }
  };

  const logout = () => {
    if (isAuth) {
      fetchLogout(null).then(res => {
        if ('data' in res) {
          setIsAuth(false);
          resetUserState();
          navigate(RouterList.SIGN_IN);
        } else {
          console.log(res.error);
        }
      });
    }
  };

  return { signIn, signUp, logout, checkIsAuth, isAuth, isLoadingAuth };
};
2;
