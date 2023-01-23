import cls from './styles.module.css';
import classNames from 'classnames';
import type { CommentProps } from 'src/store/forum/type';
import { NewCommentButton } from 'src/components';

type Props = {
  handleOpen: () => void;
} & CommentProps;

export const Comment = (props: Props) => {
  const {
    id,
    content,
    author,
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
          <br></br>
          {`${parentCommentPreview?.substring(0, 200)}...`}
        </a>
      ) : null}
      <div className={cls.comment__content}>{content}</div>
      <div className={cls.comment__author}>{author}</div>
      <NewCommentButton handleOpen={handleOpen} commentId={id} />
    </li>
  );
};
