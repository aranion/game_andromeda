import { Navigate } from 'react-router-dom';
import { RouterList } from './routerList';

const checkAuth = (): boolean => {
  //ToDo проверку авторизации вынести в контроллер, "false"- нет доступа
  return true;
};

export function withPrivateRoute(children: JSX.Element) {
  const isAuth = checkAuth();

  return !isAuth ? <Navigate to={RouterList.SIGN_IN} replace /> : children;
}
