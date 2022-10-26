import { Navigate } from 'react-router-dom';
import { RouterList } from './routerList';

const checkAuth = (): boolean => {
  //ToDo проверку авторизации вынести в контроллер, "false"- нет доступа
  return true;
};

export function PrivateRoute({ children }: Props) {
  const isAuth = checkAuth();

  return !isAuth ? <Navigate to={RouterList.SIGN_IN} replace /> : children;
}

type Props = {
  children: JSX.Element;
};
