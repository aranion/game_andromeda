import { useNavigate } from 'react-router-dom';
import { Loader } from 'src/components';
import { RouterList } from 'src/router/routerList';
import { createOauthProfile } from './oauth';

export default function OauthTokenHandler() {
  const navigate = useNavigate();
  const navigateHome = () => navigate(RouterList.HOME);

  const fullURL = window.location.search;
  const token = fullURL.split('=')[1];
  createOauthProfile(token).then(() => navigateHome());

  return <Loader />;
}
