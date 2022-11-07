import { CommentProps } from '../../../store/forum/types';
import { Card } from '../../';
import './styles.css';

export const Comment = (props: CommentProps) => {
  const { id, content, author } = props;

  return (
    <Card className='comment' id={id}>
      <div className='comment__content'>{content}</div>
      <div className='comment__author'>{author}</div>
    </Card>
  );
};
