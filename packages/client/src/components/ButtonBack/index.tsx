import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components';
import styles from './styles.module.css';

export function ButtonBack() {
  const navigate = useNavigate();
  const backNavigate = () => navigate(-1);

  return (
    <Button
      className={styles['button-back']}
      onClick={backNavigate}
      positionButton='absolute'
      title='Back'>
      🠔
    </Button>
  );
}
