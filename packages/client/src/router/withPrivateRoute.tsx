import { Navigate } from 'react-router-dom';
import { Loader } from 'src/components';
// import { useAuth } from 'src/hooks/useAuth';
import { RouterList } from './routerList';

export function withPrivateRoute(children: JSX.Element) {
  const { isAuth, isLoadingAuth } = { isAuth: true, isLoadingAuth: false }; //useAuth();

  if (isLoadingAuth) {
    return <Loader />;
  }

  return isAuth ? children : <Navigate to={RouterList.SIGN_IN} replace />;
}
