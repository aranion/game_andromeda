/* import { Link } from 'react-router-dom';
import { RouterList } from '../../router/routerList';
import { useAuth } from '../../hooks/useAuth';
import type { RequestSignIn } from '../../store/auth/type';

const mockParams: RequestSignIn = {
  login: 'Xxxxx',
  password: '123XXXxxx',
};

export default function SignIn() {
  const { logout, signIn, checkIsAuth } = useAuth();

  const handleCheckIsAuth = () => {
    checkIsAuth();
  };

  const handleSignIn = () => {
    signIn(mockParams);
  };

  const handleLogout = () => {
    logout();
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
 */
