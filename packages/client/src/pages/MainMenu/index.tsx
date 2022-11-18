import { Button, ButtonStar } from 'src/components';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { RouterList } from 'src/router/routerList';
import { useAuth } from 'src/hooks/useAuth';
import { useTypeSelector } from 'src/hooks/useTypeSelector';
import { userSelectors } from 'src/store/user';

export default function MainMenu() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { userData } = useTypeSelector(userSelectors.allUser);
  const { id } = userData;
  const navigateGame = () => navigate(RouterList.GAME);
  const navigateProfile = () => navigate(`${RouterList.PROFILE}/${id}`);
  const navigateForums = () => navigate(RouterList.FORUM);
  const navigateLeaderboards = () => navigate(RouterList.LEADER_BOARD);

  return (
    <>
      <div className='main-menu'>
        <h1 className='main-menu__title'>
          Journey
          <br />
          to the
          <br />
          Andromeda
        </h1>
        <div className='mainmenu'>
          <Button sizeButton='big' onClick={navigateGame}>
            Play
          </Button>
          <Button sizeButton='big' onClick={navigateProfile}>
            Profile
          </Button>
          <Button sizeButton='big' onClick={navigateForums}>
            Forums
          </Button>
          <Button sizeButton='big' onClick={navigateLeaderboards}>
            LeaderBoards
          </Button>
        </div>
        <ButtonStar onClick={logout}>Logout</ButtonStar>
      </div>
    </>
  );
}
