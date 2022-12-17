import { Button } from 'src/components';
import styles from './styles.module.css';
import { store } from 'src/store';
import { soundActions } from 'src/store/sound';
import { useState } from 'react';

export function ButtonSoundOption() {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  const clsButton = isSoundEnabled ? 'enabled' : 'disabled';

  const handleSetIsSoundEnabled = () => {
    if (isSoundEnabled) {
      store.dispatch(soundActions.setGlobalVolume({ volume: 0 }));
      setIsSoundEnabled(false);
    } else {
      store.dispatch(soundActions.setGlobalVolume({ volume: false }));
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
