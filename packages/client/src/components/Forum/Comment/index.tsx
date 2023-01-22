import type { CommentProps, FetchComments } from 'src/store/forum/type';
import { Card, NewCommentButton } from 'src/components';
import styles from './styles.module.css';

type Props = {
  topicId: string;
  fetchComments: FetchComments;
} & CommentProps;

export const Comment = (props: Props) => {
  const {
    id,
    content,
    author,
    parentCommentId,
    parentCommentPreview,
    parentCommentAuthor,
    topicId,
    fetchComments,
  } = props;

  return (
    <Card className={styles.comment} id={`${id}`}>
      {parentCommentId ? (
        <a href={`#${parentCommentId}`} className={styles.comment__parentLink}>
          {parentCommentAuthor}
          <br></br>
          {parentCommentPreview}
        </a>
      ) : null}
      <div className={styles.comment__content}>{content}</div>
      <div className={styles.comment__author}>{author}</div>
      <NewCommentButton
        topicId={topicId}
        fetchComments={fetchComments}
        parentCommentId={id}
      />
    </Card>
  );
};
