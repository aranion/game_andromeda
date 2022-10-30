import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { RouterList } from '../../router/routerList';
import {
  useLazyCheckAuthUserQuery,
  useLogoutMutation,
  useSignInMutation,
} from '../../store/auth/api';
import { useLazyFetchUserDataQuery } from '../../store/user/api';
import type { RequestSignIn } from '../../store/auth/type';
import type { RequestUserData } from '../../store/user/type';

export default function SignIn() {
  const { isAuth } = useTypeSelector(state => state.auth);
  const { userData } = useTypeSelector(state => state.user);

  const [fetchAuthUser] = useLazyCheckAuthUserQuery();
  const [fetchUserData] = useLazyFetchUserDataQuery();
  const [fetchLogout] = useLogoutMutation();
  const [fetchSignIn] = useSignInMutation();

  const { setIsAuth, resetUserState, setUserData } = useActions();

  const handleCheckIsAuth = () => {
    fetchAuthUser(null).then(res => {
      setIsAuth(res.isSuccess);
    });
  };

  const handleSignIn = () => {
    if (!isAuth) {
      const params: RequestSignIn = {
        login: 'Xxxxx',
        password: '123XXXxxx',
      };

      fetchSignIn(params).then(() => {
        setIsAuth(true);

        if (userData?.id) {
          const params: RequestUserData = { id: userData.id };

          fetchUserData(params).then(res => {
            if ('data' in res && res.data) {
              setUserData(res.data);
            } else {
              console.error(res.error);
            }
          });
        }
      });
    }
  };

  const handleLogout = () => {
    if (isAuth) {
      fetchLogout(null).then(res => {
        if ('data' in res) {
          setIsAuth(false);
          resetUserState();
        } else {
          console.error(res.error);
        }
      });
    }
  };

  return (
    <>
      SignIn
      <button onClick={handleCheckIsAuth}>Проверить авторизацию</button>
      <button onClick={handleSignIn}>Авторизоваться</button>
      <button onClick={handleLogout}>Выход</button>
      <Link to={RouterList.GAME}>game</Link>-
      <Link to={RouterList.PROFILE}>PROFILE</Link>-
      <Link to={RouterList.LEADER_BOARD}>LEADER_BOARD</Link> -
      <Link to={RouterList.NOT_FOUND}>NOT_FOUND</Link> -
      <Link to={RouterList.FORUM}>FORUM</Link> -
      <Link to={RouterList.SIGN_UP}>SIGN_UP</Link>
    </>
  );
}
