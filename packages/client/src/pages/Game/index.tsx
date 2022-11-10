import srcCursor from 'src/assets/imgs/curcorGame.png';
import { useLayoutEffect, useRef } from 'react';
import { Game } from './core';
import './game.css';

export default function GamePage() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const game = useRef<Game | null>(null);
  const cursor = useRef<HTMLImageElement | null>(null);

  const moveCursor = (e: MouseEvent) => {
    if (cursor?.current) {
      const { pageY, pageX } = e;

      cursor.current.style.transform = `translate(${pageX}px, ${pageY}px)`;
    }
  };

  useLayoutEffect(() => {
    if (canvas?.current) {
      game.current = new Game({ canvas: canvas.current });
      game.current?.init();

      canvas.current.addEventListener('mousemove', moveCursor);
    }
    return () => {
      game?.current?.unmount();
      canvas.current?.removeEventListener('mousemove', moveCursor);
    };
  }, [canvas]);

  return (
    <>
      <canvas className='canvas' ref={canvas}></canvas>
      <img className='cursor' ref={cursor} src={srcCursor} />
    </>
  );
}
