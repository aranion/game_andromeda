import { CommentProps } from 'src/store/forum/types';
import { Card } from 'src/components';
import styles from './styles.module.css';

export const Comment = (props: CommentProps) => {
  const { id, content, author } = props;

  return (
    <Card className={styles.comment} id={id}>
      <div className={styles['comment__content']}>{content}</div>
      <div className={styles['comment__author']}>{author}</div>
    </Card>
  );
};
