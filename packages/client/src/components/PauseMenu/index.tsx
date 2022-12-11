import { useEffect, useState } from 'react';
import { Button, Modal } from 'src/components';
import { useLocation, useNavigate } from 'react-router-dom';
import { RouterList } from 'src/router/routerList';
import { gameSelectors } from 'src/store/game';
import { useTypeSelector } from 'src/hooks/useTypeSelector';
import { userSelectors } from 'src/store/user';
import { useActions } from 'src/hooks/useActions';
import { GameStatusList } from 'src/store/game/type';

export function PauseMenu() {
  const [isActivePause, setIsActivePause] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const gameStatus = useTypeSelector(gameSelectors.gameStatus);
  const { userData } = useTypeSelector(userSelectors.all);

  const { setGameStatus } = useActions();

  const { id } = userData;
  const isGamePage = pathname === '/game';
  const isNotHomePage = pathname !== '/';
  const isNotLeaderBoardPage = pathname !== '/leader-board';
  const isNotProfile = !pathname.includes('/profile');
  const isNotForum = !pathname.includes('/forum');
  const isSignUpOrInPage = pathname.includes('/sign');

  useEffect(() => {
    document.body.addEventListener('keydown', handlePause);

    return () => {
      document.body.removeEventListener('keydown', handlePause);
    };
  }, []);

  const setIsActivePauseMutated = (isValue: boolean) => {
    if (gameStatus === GameStatusList.stopped) return;
    if (isValue) {
      setGameStatus(GameStatusList.paused);
    } else {
      setGameStatus(GameStatusList.running);
    }
    setIsActivePause(isValue);
  };

  const handleTogglePauseMenu = () => {
    setIsActivePauseMutated(!isActivePause);
  };

  const navigateHome = () => {
    navigate(RouterList.HOME);
    handleTogglePauseMenu();
  };

  const navigateGame = () => {
    navigate(RouterList.GAME);
    handleTogglePauseMenu();
  };

  const navigateForums = () => {
    navigate(RouterList.FORUM);
    handleTogglePauseMenu();
  };

  const navigateProfile = () => {
    navigate(`${RouterList.PROFILE}/${id}`);
    handleTogglePauseMenu();
  };

  const navigateLeaderboard = () => {
    navigate(RouterList.LEADER_BOARD);
    handleTogglePauseMenu();
  };

  const navigateBack = () => {
    navigate(-1);
    handleTogglePauseMenu();
  };

  const handlePause = (event: KeyboardEvent) => {
    const { repeat, key } = event;

    if (!repeat && key === 'Escape') {
      handleTogglePauseMenu();
    }
  };

  if (isSignUpOrInPage) {
    return null;
  }

  return (
    <Modal active={isActivePause} setActive={setIsActivePauseMutated}>
      {!isGamePage && <Button onClick={navigateGame}>Play</Button>}
      {isGamePage && <Button onClick={handleTogglePauseMenu}>Resume</Button>}
      {isNotProfile && <Button onClick={navigateProfile}>Profile</Button>}
      {isNotForum && <Button onClick={navigateForums}>Forums</Button>}
      {isNotLeaderBoardPage && (
        <Button onClick={navigateLeaderboard}>Leaderboard</Button>
      )}
      {isSignUpOrInPage && <Button onClick={navigateBack}>Back</Button>}
      {isNotHomePage && <Button onClick={navigateHome}>Back to Menu</Button>}
    </Modal>
  );
}
