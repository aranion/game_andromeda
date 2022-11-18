import { useState, useLayoutEffect } from 'react';

interface DocumentWithFullscreen extends Document {
  mozFullScreenElement?: HTMLElement;
  msFullscreenElement?: HTMLElement;
  webkitFullscreenElement?: HTMLElement;
  msExitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
}

interface DocumentElementWithFullscreen extends HTMLElement {
  msRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
}

const getIsFullscreen = () => {
  const doc = document as DocumentWithFullscreen;
  return (
    doc.fullscreenElement ||
    doc.mozFullScreenElement ||
    doc.webkitFullscreenElement ||
    doc.msFullscreenElement
  );
};

const activateFullscreen = (elem: DocumentElementWithFullscreen) => {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    //@ts-ignore
    elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  }
};

export const exitFullscreen = () => {
  const doc = document as DocumentWithFullscreen;
  if (doc.exitFullscreen) {
    doc.exitFullscreen();
  } else if (doc.msExitFullscreen) {
    doc.msExitFullscreen();
  } else if (doc.mozCancelFullScreen) {
    doc.mozCancelFullScreen();
  } else if (doc.webkitExitFullscreen) {
    doc.webkitExitFullscreen();
  }
};

export const useFullscreen = (elRef: React.RefObject<HTMLElement>) => {
  const [isFullscreen, setIsFullscreen] = useState(getIsFullscreen());

  const setFullscreen: () => void = () => {
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

  return { isFullscreen, setFullscreen };
};
