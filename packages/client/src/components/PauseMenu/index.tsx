import { useState } from 'react';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { useNavigate } from 'react-router-dom';
import { RouterList } from '../../router/routerList';
import { gameActions, gameSelectors } from '../../store/game';
import { store } from '../../store';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { userSelectors } from 'src/store/user';

export function PauseMenu() {
  const [isActivePause, setIsActivePause] = useState(false);
  const navigate = useNavigate();
  const gameStatus = useTypeSelector(gameSelectors.gameStatus);

  const setIsActivePauseMutated = (isValue: boolean) => {
    if (gameStatus === 'stopped') return;
    if (isValue) {
      store.dispatch(gameActions.setGameStatus('paused'));
    } else {
      store.dispatch(gameActions.setGameStatus('running'));
    }
    setIsActivePause(isValue);
  };

  const handleOpenPauseMenu = () => {
    setIsActivePauseMutated(true);
  };

  const handleClosePauseMenu = () => {
    setIsActivePauseMutated(false);
  };

  const navigateHome = () => {
    navigate(RouterList.HOME);
    handleClosePauseMenu();
  };

  const navigateGame = () => {
    navigate(RouterList.GAME);
    handleClosePauseMenu();
  };

  const navigateForums = () => {
    navigate(RouterList.FORUM);
    handleClosePauseMenu();
  };

  const { userData } = useTypeSelector(userSelectors.all);
  const { id } = userData;
  const navigateProfile = () => {
    navigate(`${RouterList.PROFILE}/${id}`);
    handleClosePauseMenu();
  };

  const navigateLeaderboard = () => {
    navigate(RouterList.LEADER_BOARD);
    handleClosePauseMenu();
  };

  const navigateBack = () => {
    navigate(-1);
    handleClosePauseMenu();
  };

  const handlePause = (event: KeyboardEvent) => {
    if (!event.repeat && event.key === 'Escape') {
      handleOpenPauseMenu();
    }
  };

  document.body.addEventListener('keydown', handlePause);

  const pathname = document.location.pathname;
  console.log(pathname);
  if (pathname === '/game') {
    return (
      <>
        <Modal active={isActivePause} setActive={setIsActivePauseMutated}>
          <Button onClick={handleClosePauseMenu}>Resume</Button>
          <Button onClick={navigateProfile}>Profile</Button>
          <Button onClick={navigateForums}>Forums</Button>
          <Button onClick={navigateLeaderboard}>Leaderboard</Button>
          <Button onClick={navigateHome}>Back to Menu</Button>
        </Modal>
      </>
    );
  } else if (pathname === '/') {
    return (
      <>
        <Modal active={isActivePause} setActive={setIsActivePauseMutated}>
          <Button onClick={navigateGame}>Play</Button>
          <Button onClick={navigateProfile}>Profile</Button>
          <Button onClick={navigateForums}>Forums</Button>
          <Button onClick={navigateLeaderboard}>Leaderboard</Button>
        </Modal>
      </>
    );
  } else if (pathname === '/leader-board') {
    return (
      <>
        <Modal active={isActivePause} setActive={setIsActivePauseMutated}>
          <Button onClick={navigateGame}>Play</Button>
          <Button onClick={navigateForums}>Forums</Button>
          <Button onClick={navigateProfile}>Profile</Button>
          <Button onClick={navigateHome}>Back to Menu</Button>
        </Modal>
      </>
    );
  } else if (pathname.includes('/forum')) {
    return (
      <>
        <Modal active={isActivePause} setActive={setIsActivePauseMutated}>
          <Button onClick={navigateGame}>Play</Button>
          <Button onClick={navigateLeaderboard}>Leaderboard</Button>
          <Button onClick={navigateProfile}>Profile</Button>
          <Button onClick={navigateHome}>Back to Menu</Button>
        </Modal>
      </>
    );
  } else if (pathname.includes('/profile')) {
    return (
      <>
        <Modal active={isActivePause} setActive={setIsActivePauseMutated}>
          <Button onClick={navigateGame}>Play</Button>
          <Button onClick={navigateLeaderboard}>Leaderboard</Button>
          <Button onClick={navigateForums}>Forums</Button>
          <Button onClick={navigateHome}>Back to Menu</Button>
        </Modal>
      </>
    );
  } else if (pathname.includes('/sign')) {
    return (
      <>
        <Modal active={isActivePause} setActive={setIsActivePauseMutated}>
          <Button onClick={navigateBack}>Back</Button>
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <Modal active={isActivePause} setActive={setIsActivePauseMutated}>
          <Button onClick={navigateHome}>Back to Menu</Button>
        </Modal>
      </>
    );
  }
}
