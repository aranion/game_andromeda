import { Link } from 'react-router-dom';
import { TopicProps } from '../../../store/forum/types';

export function TopicItem(props: TopicProps) {
  const { topicId, title, commentCount } = props;

  return (
    <tr>
      <td>
        <Link to={`/topic/${topicId}`}>
          <div className='forum__title'>{title}</div>
        </Link>
      </td>
      <td>{commentCount}</td>
    </tr>
  );
}
