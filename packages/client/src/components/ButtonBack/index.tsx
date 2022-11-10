import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

export function ButtonBack() {
  const navigate = useNavigate();
  const backNavigate = () => navigate(-1);
  return (
    <button className={styles['button-back']} onClick={backNavigate}>
      🠔
    </button>
  );
}
