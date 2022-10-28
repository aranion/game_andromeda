import { Navigate } from 'react-router-dom';
import { RouterList } from './routerList';

export function withPrivateRoute(children: JSX.Element) {
  const isAuth = true;

  return isAuth ? children : <Navigate to={RouterList.SIGN_IN} replace />;
}
