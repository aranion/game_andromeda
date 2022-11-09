import { Button, Star } from '../..';
import type { ButtonProps } from '../../Button';
import styles from './styles.module.css';

export function ForumButton(props: ButtonProps) {
  const { onClick, children } = props;
  return (
    <div className={styles['button-star']}>
      <Star size='small' relative={true} />
      <Button onClick={onClick}>{children}</Button>
      <Star size='small' relative={true} />
    </div>
  );
}
