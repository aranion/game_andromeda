import { Button, TitlePage } from 'src/components';
import cls from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { RouterList } from 'src/router/routerList';

export default function Intro() {
  const navigate = useNavigate();
  const navigateMain = () => navigate(RouterList.MAINMENU);

  return (
    <div className={cls.intro}>
      <TitlePage>
        Journey
        <br />
        to the
        <br />
        Andromeda
      </TitlePage>
      <div className={cls.intro__content}>
        Path to Adromeda is a space adventure game.
        <br />
        A research ship travels through space to reach the spiral galaxy in the
        constellation Andromeda.
        <br />
        To implement the plan, the ship needs to collect resources, dodging
        asteroids and UFOs.
        <br />
        To win, collect extra lives, take a shield from hitting atheroids,
        collect speed boost.
        <br />
        You can even double your points!
        <br />
        While playing, you can turn on full screen mode, turn space music on and
        off, as well as switch the color themes of the game.
        <br />
        After registration, you will have a profile page - you can add an avatar
        or come up with a cool nickname!
        <br />
        On the leaderboard page you can see the best players. Hurry up to take
        first place!
        <br />
        The game also has its own forum page where you can chat with your
        competitors!
      </div>
      <Button sizeButton='big' onClick={navigateMain}>
        GO!!!
      </Button>
    </div>
  );
}
