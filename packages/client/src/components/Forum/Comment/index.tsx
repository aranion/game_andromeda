import classnames from 'classnames';
import { Link } from 'react-router-dom';
import type { CommentProps } from 'src/store/forum/types';
import { Card } from 'src/components';
import styles from './styles.module.css';

export const Comment = (props: CommentProps) => {
  const { id, content, author, parentCommentId } = props;
  const classNames = classnames('comment__child', styles.comment);

  return (
    <Card className={classNames} id={`${id}`}>
      {parentCommentId ? <a href={`#${parentCommentId}`}>fggdgdg</a> : null}
      <div className={styles.comment__content}>{content}</div>
      <div className={styles.comment__author}>{author}</div>
    </Card>
  );
};
