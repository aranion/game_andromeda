import { useFullscreen } from 'src/hooks/useFullscreen';
import { Button } from 'src/components';
import styles from './styles.module.css';

type Props = {
  elemRef: React.RefObject<HTMLElement>;
};

export function ButtonFullscreen(props: Props) {
  const { elemRef } = props;
  const { isFullscreen, setFullscreen, exitFullscreen } =
    useFullscreen(elemRef);

  const clsButton = isFullscreen ? 'exit' : 'open';

  const handleSetIsFullscreen = () => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      setFullscreen();
    }
  };

  return (
    <Button
      className={styles['button-fullscreen']}
      onClick={handleSetIsFullscreen}
      positionButton='absolute'
      title='Fullscreen'>
      <span className={styles[`fullscreen-${clsButton}`]} />
    </Button>
  );
}
