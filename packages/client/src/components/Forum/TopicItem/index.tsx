import { Link } from 'react-router-dom';
import type { TopicProps } from 'src/store/forum/types';
import { RouterList } from 'src/router/routerList';

export function TopicItem(props: TopicProps) {
  const { topicId, title, commentCount } = props;

  return (
    <tr>
      <td className='main-table__td'>
        <Link
          className='main-table__a'
          to={`${RouterList.FORUM_TOPIC}/${topicId}`}>
          <div>{title}</div>
        </Link>
      </td>
      <td className='main-table__td'>{commentCount}</td>
    </tr>
  );
}
