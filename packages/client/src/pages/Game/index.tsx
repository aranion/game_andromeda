import { useLayoutEffect, useRef } from 'react';
import { Game } from './core';
import styles from './game.module.css';

export default function GamePage() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const game = useRef<Game | null>(null);

  useLayoutEffect(() => {
    if (canvas?.current) {
      game.current = Game.getInstance({ canvas: canvas.current });
      game.current.init();
    }

    return () => game?.current?.unmount();
  }, [canvas]);

  return <canvas className={styles.canvas} ref={canvas}></canvas>;
}
