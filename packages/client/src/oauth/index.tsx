import { useNavigate } from 'react-router-dom';
import { RouterList } from 'src/router/routerList';
import { createOauthProfile } from './oauth';

export function OauthTokenHandler(children: JSX.Element) {
  const navigate = useNavigate();
  const navigateHome = () => navigate(RouterList.HOME);

  const fullURL = window.location.search;
  const token = fullURL.split('=')[1];

  if (token) {
    console.log('пришёл токен:', token, '1');
    createOauthProfile(token).then(() => navigateHome());
  } else return children;
}
