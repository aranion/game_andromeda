import cls from './styles.module.css';
import classNames from 'classnames';
import type { Comment as CommentProps } from 'src/store/forum/type';
import { NewCommentButton } from 'src/components';

type Props = {
  handleOpen: () => void;
} & CommentProps;

export const Comment = (props: Props) => {
  const {
    id,
    content,
    authorName,
    parentCommentId,
    parentCommentPreview,
    parentCommentAuthor,
    handleOpen,
  } = props;

  const clsList = classNames('card', cls.comment);

  return (
    <li className={clsList} id={`${id}`}>
      {parentCommentId ? (
        <a href={`#${parentCommentId}`} className={cls.comment__parentLink}>
          {parentCommentAuthor}
          <br />
          {`${parentCommentPreview?.substring(0, 200)}...`}
        </a>
      ) : null}
      <div className={cls.comment__content}>{content}</div>
      <div className={cls.comment__author}>{authorName}</div>
      <NewCommentButton handleOpen={handleOpen} commentId={id} />
    </li>
  );
};
