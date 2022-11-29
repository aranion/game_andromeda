import { useState, useCallback } from 'react';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { Game } from '../../pages/Game/core';
import { useNavigate } from 'react-router-dom';
import { RouterList } from '../../router/routerList';

type PauseMenuProps = { game: React.MutableRefObject<Game | null> };

export function PauseMenu(props: PauseMenuProps) {
  const [isActivePause, setIsActivePause] = useState(false);
  const navigate = useNavigate();
  const { game } = props;

  const setIsActivePauseMutated = (isValue: boolean) => {
    if (isValue) {
      game.current?.pause();
    } else {
      game.current?.unpause();
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
  };

  const navigateForums = () => {
    navigate(RouterList.FORUM);
  };

  const navigateLeaderboard = () => {
    navigate(RouterList.LEADER_BOARD);
  };

  const handlePause = (event: KeyboardEvent) => {
    console.log('running keydown');
    if (!event.repeat && event.key === 'Escape') {
      handleOpenPauseMenu();
    } else {
      console.log('its a repeat!');
    }
  };

  document.body.addEventListener('keydown', handlePause);

  return (
    <Modal active={isActivePause} setActive={setIsActivePauseMutated}>
      <Button onClick={handleClosePauseMenu}>Resume</Button>
      <Button onClick={navigateForums}>Forums</Button>
      <Button onClick={navigateLeaderboard}>Leaderboard</Button>
      <Button onClick={navigateHome}>Back to Menu</Button>
    </Modal>
  );
}
