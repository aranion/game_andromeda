import { useState, useLayoutEffect } from 'react';

const getIsFullscreen = () => {
  return (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement
  );
};

const activateFullscreen = (elem: HTMLElement) => {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  }
};

export const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};

export const useFullScreen = (elRef: React.RefObject<HTMLInputElement>) => {
  const [isFullscreen, setIsFullscreen] = useState(getIsFullscreen());

  const setFullscreen = () => {
    if (elRef.current === null) return;
    activateFullscreen(elRef.current);
  };

  useLayoutEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(getIsFullscreen());
    }
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  });

  return [isFullscreen, setFullscreen];
};
