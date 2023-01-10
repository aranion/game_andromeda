import { Button } from 'src/components';
import styles from './styles.module.css';
import { useState } from 'react';
import { useActions } from 'src/hooks/useActions';

export function ButtonSoundOption() {
  const { setGlobalVolume } = useActions();

  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  const clsButton = isSoundEnabled ? 'enabled' : 'disabled';

  const handleSetIsSoundEnabled = () => {
    if (isSoundEnabled) {
      setGlobalVolume({ volume: 0 });
      setIsSoundEnabled(false);
    } else {
      setGlobalVolume({ volume: 0.6 });
      setIsSoundEnabled(true);
    }
  };

  return (
    <Button
      className={styles['button-soundoption']}
      onClick={handleSetIsSoundEnabled}
      positionButton='absolute'
      title='SoundOption'>
      <span className={styles[`soundoption-${clsButton}`]} />
    </Button>
  );
}
