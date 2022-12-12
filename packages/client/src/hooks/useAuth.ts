import { useNavigate } from 'react-router-dom';
import { useActions } from './useActions';
import { useTypeSelector } from './useTypeSelector';
import { RouterList } from 'src/router/routerList';
import { authSelectors } from '../../../server/store/auth';
import { BASE_URL } from '../../../server/constants/vars';
import type { User } from '../../../server/store/user/type';

export const useAuth = () => {
  const URI_AUTH = `${BASE_URL}/auth`;
  const DEFAULT_OPTIONS = {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  } as const;

  const { isAuth, isLoadingAuth } = useTypeSelector(authSelectors.allAuth);

  const { setIsAuth, resetUserState, setIsLoadingAuth, setUserData } =
    useActions();

  const navigate = useNavigate();

  const error = (error: Error) => {
    if ('reason' in error) {
      throw new Error(error.reason);
    } else {
      console.error(error);
    }
  };

  const checkIsAuth = () => {
    setIsLoadingAuth(true);

    fetch(`${URI_AUTH}/user`, {
      ...DEFAULT_OPTIONS,
    })
      .then<ResponseAuthUser>(res => res.json())
      .then(res => {
        if ('reason' in res) {
          error(res);
        } else {
          setIsAuth(true);
          setUserData(res);
        }
      })
      .catch(console.error)
      .finally(() => {
        setIsLoadingAuth(false);
      });
  };

  const signIn = (params: RequestSignIn) => {
    if (!isAuth) {
      fetch(`${URI_AUTH}/signin`, {
        ...DEFAULT_OPTIONS,
        method: 'POST',
        body: JSON.stringify(params),
      })
        .then<ResponseSignIn>(res => res.text())
        .then(res => {
          if (typeof res === 'string') {
            if (res === 'OK') {
              checkIsAuth();
              navigate(RouterList.HOME);
            }
          } else {
            error(res);
          }
        })
        .catch(console.error);
    } else {
      navigate(RouterList.HOME);
    }
  };

  const signUp = (params: RequestSignUp) => {
    if (!isAuth) {
      fetch(`${URI_AUTH}/signup`, {
        ...DEFAULT_OPTIONS,
        method: 'POST',
        body: JSON.stringify(params),
      })
        .then<ResponseSignUp>(res => res.json())
        .then(res => {
          if ('reason' in res) {
            error(res);
          } else {
            const { id } = res;

            setUserData({ id });
            checkIsAuth();
            navigate(RouterList.HOME);
          }
        })
        .catch(console.error);
    } else {
      navigate(RouterList.HOME);
    }
  };

  const logout = () => {
    if (isAuth) {
      fetch(`${URI_AUTH}/logout`, {
        method: 'POST',
        credentials: 'include',
      })
        .then<ResponseLogout>(res => res.text())
        .then(res => {
          if (typeof res === 'string') {
            if (res === 'OK') {
              setIsAuth(false);
              resetUserState();
              navigate(RouterList.SIGN_IN);
            }
          } else {
            error(res);
          }
        })
        .catch(console.error);
    }
  };

  return { signIn, signUp, logout, checkIsAuth, isAuth, isLoadingAuth };
};

type Error = {
  reason: string;
};

type ResponseAuthUser = User | Error;
type ResponseLogout = string | Error;
type ResponseSignIn = string | Error;
type ResponseSignUp = Pick<User, 'id'> | Error;

export type RequestSignIn = Pick<User, 'login'> & { password: string };
export type RequestSignUp = Omit<User, 'id' | 'avatar' | 'display_name'> & {
  password: string;
};
