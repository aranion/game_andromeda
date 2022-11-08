import cls from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { RouterList } from '../../router/routerList';
import { Button } from '../';
import { CONFIG_PARAMS } from './constants';
import type { To } from 'react-router-dom';

export function ErrorSample(props: Props) {
  const { code, message, typeButton } = props;

  const refWrapper = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (refWrapper) {
      const { amount, size, duration } = CONFIG_PARAMS;
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

        starElem.classList.add(cls.errorSample__star);

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

        fragment.appendChild(starElem);
      }

      (refWrapper.current as HTMLDivElement | null)?.prepend(fragment);
    }
  }, [refWrapper]);

  const handleGoBack = () => {
    const navParam = typeButton === 'back' ? (-1 as To) : RouterList.HOME;

    navigate(navParam);
  };

  return (
    <div className={cls.errorSample} ref={refWrapper}>
      <section className={cls.errorSample__content}>
        <h1 className={cls.errorSample__title}>ERROR</h1>
        <span className={cls.errorSample__code}>{code}</span>
        <p>{message}</p>
        <Button onClick={handleGoBack} className={cls.errorSample__buttonBack}>
          {typeButton === 'back' ? 'Back' : 'Go Home'}
        </Button>
      </section>
    </div>
  );
}

type Props = {
  code: string;
  message: string;
  typeButton: 'home' | 'back';
};
