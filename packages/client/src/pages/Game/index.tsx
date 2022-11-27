import { useLayoutEffect, useRef } from 'react';
import { Game } from './core';
import './game.css';

export default function GamePage() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const game = useRef<Game | null>(null);

  useLayoutEffect(() => {
    if (canvas?.current) {
      game.current = new Game({ canvas: canvas.current });
      game.current?.init();
    }
    return () => {
      game?.current?.unmount();
    };
  }, [canvas]);

  return <canvas className='canvas' ref={canvas}></canvas>;
}
