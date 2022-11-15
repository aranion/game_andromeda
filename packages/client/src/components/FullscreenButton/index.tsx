import { useFullScreen, exitFullscreen } from 'src/hooks/useFullScreen';
import styles from './styles.module.css';

type Props = {
  elemRef: React.RefObject<HTMLInputElement>;
};

export function FullscreenButton(props: Props) {
  const { elemRef } = props;
  const [isFullscreen, setIsFullscreen] = useFullScreen(elemRef);

  return isFullscreen ? (
    <button className={styles['button-fullscreen']} onClick={exitFullscreen}>
      <span className={styles['fullscreen-exit']}></span>
    </button>
  ) : (
    <button className={styles['button-fullscreen']} onClick={setIsFullscreen}>
      <span className={styles['fullscreen-open']}></span>
    </button>
  );
}
