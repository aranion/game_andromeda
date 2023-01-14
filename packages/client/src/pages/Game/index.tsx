import { useEffect, useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterList } from 'src/router/routerList';
import { useLeaderBoard } from '../../hooks/useLeaderBoard';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { gameSelectors } from '../../store/game';
import { Game } from './core';
import './game.css';

export default function GamePage() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const game = useRef<Game | null>(null);
  const navigate = useNavigate();

  const { hightScore, gameStatus } = useTypeSelector(gameSelectors.all);

  const { addTeamLeader } = useLeaderBoard();

  const goHome = () => {
    navigate(RouterList.HOME);
  };

  useLayoutEffect(() => {
    if (canvas?.current) {
      game.current = new Game({ canvas: canvas.current, goHome });
      game.current?.init();
    }
    return () => {
      game?.current?.unmount();
    };
  }, [canvas]);

  useEffect(() => {
    if (hightScore) {
      addTeamLeader(hightScore);
    }
    if (gameStatus && game?.current) {
      game.current.updateGameStatus(gameStatus);
    }
  }, [hightScore, gameStatus]);

  return <canvas className='canvas' ref={canvas}></canvas>;
}
