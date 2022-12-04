import cls from './App.module.css';
import { useCallback, useEffect, useRef } from 'react';
import { Router } from './router';
import { useAuth } from './hooks/useAuth';
import { CONFIG_STARS_PARAMS } from './constants/vars';
import { useLocation } from 'react-router-dom';
import { RouterList } from './router/routerList';
import { ButtonFullscreen } from './components';

function App() {
  // const { checkIsAuth } = useAuth();

  // const { pathname } = useLocation();
  const refWrapper = useRef(null);
  const fullscrinableElem = useRef(null);

  const startStarts = useCallback(() => {
    const isNotGamePage = true;
    // const isNotGamePage = pathname.toLocaleLowerCase() !== RouterList.GAME;

    if (refWrapper && isNotGamePage) {
      const { amount, size, duration } = CONFIG_STARS_PARAMS;
      const { giant, max, min } = size;

      const randomBetween = (a: number, b: number) => {
        return a + Math.random() * (b - a);
      };

      const fragment = document.createDocumentFragment();

      for (let i = 0; i < amount; i++) {
        const starElem = document.createElement('div');
        const sizeElem =
          Math.round(Math.random() * 10) === 0
            ? giant
            : randomBetween(min, max);

        starElem.classList.add(cls.app__star);

        starElem.style.width = `${sizeElem}px`;
        starElem.style.height = `${sizeElem}px`;
        starElem.style.left = `${randomBetween(0, 100)}%`;
        starElem.style.top = `${randomBetween(0, 100)}%`;
        starElem.style.boxShadow = `0 0 ${sizeElem}px ${
          sizeElem / 2
        }px #043668`;
        starElem.style.animationDuration = `${randomBetween(
          duration.min,
          duration.max
        )}s`;

        fragment.append(starElem);
      }

      (refWrapper.current as HTMLDivElement | null)?.after(fragment);
    }
  }, [refWrapper]);

  useEffect(() => {
    // checkIsAuth();
    startStarts();

    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };
    fetchServerData();
  }, []);

  return (
    <div className={cls.app} ref={fullscrinableElem}>
      <main className={cls.app__content}>
        SSR...
        {/* <Router /> */}
      </main>
      <ButtonFullscreen elemRef={fullscrinableElem} />
      <div ref={refWrapper}></div>
    </div>
  );
}

export default App;
