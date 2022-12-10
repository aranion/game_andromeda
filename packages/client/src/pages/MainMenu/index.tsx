import { Button, ButtonStar, Star, TitlePage } from 'src/components';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { RouterList } from 'src/router/routerList';
import { useAuth } from 'src/hooks/useAuth';
import { useTypeSelector } from 'src/hooks/useTypeSelector';
import { userSelectors } from '../../../../server/store/user';

const configStar = [
  { top: '7%', left: '3%' },
  { top: '2%', left: '15%' },
  { top: '30%', left: '10%' },
  { top: '3%', left: '80%' },
  { top: '13%', left: '85%' },
  { top: '23%', left: '95%' },
  { top: '81%', left: '5%' },
  { top: '75%', left: '89%' },
  { top: '57%', left: '78%' },
];

export default function MainMenu() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { userData } = useTypeSelector(userSelectors.all);
  const { id } = userData;
  const navigateGame = () => navigate(RouterList.GAME);
  const navigateProfile = () => navigate(`${RouterList.PROFILE}/${id}`);
  const navigateForums = () => navigate(RouterList.FORUM);
  const navigateLeaderboards = () => navigate(RouterList.LEADER_BOARD);

  return (
    <>
      <div className='main-menu'>
        {configStar.map((item, idx) => (
          <Star key={idx} top={item.top} left={item.left} />
        ))}
        <TitlePage>
          Journey
          <br />
          to the
          <br />
          Andromeda
        </TitlePage>
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
        <ButtonStar onClick={logout}>Log out</ButtonStar>
      </div>
    </>
  );
}
