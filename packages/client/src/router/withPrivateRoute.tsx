import { Navigate } from 'react-router-dom';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { RouterList } from './routerList';

export function withPrivateRoute(children: JSX.Element) {
  const { isAuth } = useTypeSelector(state => state.auth);

  return isAuth ? children : <Navigate to={RouterList.SIGN_IN} replace />;
}
