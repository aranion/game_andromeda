import { Button, Star } from 'src/components';
import type { ButtonProps } from 'src/components/Button';
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
