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
    <ul className={cls.list}>
      {list.map(comment => {
        return (
          <Comment {...comment} handleOpen={handleOpen} key={comment.id} />
        );
      })}
    </ul>
  );
};
