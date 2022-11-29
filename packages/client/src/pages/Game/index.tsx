import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLeaderBoard } from '../../hooks/useLeaderBoard';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { gameSelectors } from '../../store/game';
import { Game } from './core';
import './game.css';

export default function GamePage() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const game = useRef<Game | null>(null);

  const hightScore = useTypeSelector(gameSelectors.hightScore);
  const gameStatus = useTypeSelector(gameSelectors.gameStatus);

  const { addTeamLeader } = useLeaderBoard();

  useLayoutEffect(() => {
    if (canvas?.current) {
      game.current = new Game({ canvas: canvas.current });
      game.current?.init();
    }
    return () => game?.current?.unmount();
  }, [canvas]);

  useEffect(() => {
    if (hightScore) {
      addTeamLeader(hightScore);
    }
    if (gameStatus && game && game.current) {
      game.current.updateGameStatus(gameStatus);
    }
  }, [hightScore, gameStatus]);

  return (
    <>
      <canvas className='canvas' ref={canvas}></canvas>
    </>
  );
}
