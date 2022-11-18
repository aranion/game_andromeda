import { useFullScreen, exitFullscreen } from 'src/hooks/useFullscreen';
import { Button } from 'src/components';
import styles from './styles.module.css';

type Props = {
  elemRef: React.RefObject<HTMLElement>;
};

export function ButtonFullscreen(props: Props) {
  const { elemRef } = props;
  const { isFullscreen, setFullscreen } = useFullScreen(elemRef);

  const handleSetIsFullscreen = () => setFullscreen();

  return isFullscreen ? (
    <Button className={styles['button-fullscreen']} onClick={exitFullscreen}>
      <span className={styles['fullscreen-exit']}></span>
    </Button>
  ) : (
    <Button
      className={styles['button-fullscreen']}
      onClick={handleSetIsFullscreen}>
      <span className={styles['fullscreen-open']}></span>
    </Button>
  );
}
