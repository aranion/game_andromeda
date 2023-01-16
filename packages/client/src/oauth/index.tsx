import { useLocation, useNavigate } from 'react-router-dom';
import { RouterList } from 'src/router/routerList';
import { createOauthProfile } from './oauth';

let wasSent = false;

export function OauthTokenHandler(children: JSX.Element) {
  const navigate = useNavigate();
  const navigateHome = () => navigate(RouterList.HOME);

  const location = useLocation().search;
  const token = location.split('=')[1];

  if (token && !wasSent) {
    wasSent = true;
    console.log('пришёл токен:', token);
    createOauthProfile(token).then(() => navigateHome());
  } else return children;
}
