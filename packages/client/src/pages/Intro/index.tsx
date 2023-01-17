import { Button, TitlePage } from 'src/components';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { RouterList } from 'src/router/routerList';

export default function Intro() {
  const navigate = useNavigate();
  const navigateMain = () => navigate(RouterList.MAINMENU);

  return (
    <>
      <div className='main-menu'>
        <TitlePage>
          Journey
          <br />
          to the
          <br />
          Andromeda
        </TitlePage>
        <div className='mainmenu'>
          <Button sizeButton='big'>Play</Button>
        </div>
        <Button sizeButton='big' onClick={navigateMain}>
          GO!!!
        </Button>
      </div>
    </>
  );
}
