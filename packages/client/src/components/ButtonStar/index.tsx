import { Button, Star } from '..';
import type { ButtonProps } from '../Button';
import styles from './styles.module.css';

export function ButtonStar(props: ButtonProps) {
  const { onClick, children } = props;
  return (
    <div className={styles['button__wrap']}>
      <Star size='small' relative={true} />
      <Button className={styles['button-star']} onClick={onClick}>
        {children}
      </Button>
      <Star size='small' relative={true} />
    </div>
  );
}
