import { Link } from 'react-router-dom';
import { TopicProps } from '../../../store/forum/types';
import { RouterList } from '../../../router/routerList';

export function TopicItem(props: TopicProps) {
  const { topicId, title, commentCount } = props;

  return (
    <tr>
      <td className='main-table__td'>
        <Link to={`${RouterList.FORUM_TOPIC}/${topicId}`}>
          <div>{title}</div>
        </Link>
      </td>
      <td className='main-table__td'>{commentCount}</td>
    </tr>
  );
}
