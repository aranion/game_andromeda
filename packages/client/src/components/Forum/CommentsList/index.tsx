import type { Comment as CommentProps } from 'src/store/forum/type';
import { Comment } from 'src/components';
import cls from './styles.module.css';

type Props = {
  list: CommentProps[];
  handleOpen: () => void;
  getComments: (id: number) => void;
};

export const CommentsList = (props: Props) => {
  const { list, handleOpen, getComments } = props;

  return (
    <ul className={cls.list}>
      {list.map(comment => {
        return (
          <Comment
            {...comment}
            handleOpen={handleOpen}
            key={comment.id}
            getComments={getComments}
          />
        );
      })}
    </ul>
  );
};
