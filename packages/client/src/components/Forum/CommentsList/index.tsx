import type { Comment as CommentProps } from 'src/store/forum/type';
import { Comment } from 'src/components';
import cls from './styles.module.css';

type Props = {
  list: CommentProps[];
  handleOpen: () => void;
};

export const CommentsList = (props: Props) => {
  const { list, handleOpen } = props;

  return (
    <>
      <ul className={cls.list}>
        {list.map(comment => {
          const { id, content, author, parentCommentId } = comment;
          const parent = list.find(comment => comment.id === parentCommentId);

          return (
            <Comment
              key={id}
              id={id}
              content={content}
              author={author}
              handleOpen={handleOpen}
              parentCommentId={parentCommentId}
              parentCommentPreview={parent?.content}
              parentCommentAuthor={parent?.author}
            />
          );
        })}
      </ul>
    </>
  );
};
