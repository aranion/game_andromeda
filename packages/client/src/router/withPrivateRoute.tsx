import { Navigate } from 'react-router-dom';
import { NoAccess } from '../components';
import { useAuth } from '../hooks/usuAuth';
import { RouterList } from './routerList';

export function withPrivateRoute(children: JSX.Element) {
  const { isAuth, isLoadingAuth } = useAuth();

  if (isLoadingAuth) {
    return <NoAccess />;
  }

  return isAuth ? children : <Navigate to={RouterList.SIGN_IN} replace />;
}
