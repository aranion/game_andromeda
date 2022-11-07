import { Link } from 'react-router-dom';
import { ForumProps } from '../../../store/forum/types';

export function ForumItem(props: ForumProps) {
  const { forumId, title, topicsCount, commentsCount } = props;

  return (
    <tr id={forumId}>
      <td>
        <Link to={`/forum/${forumId}`}>
          <div className='forum__title'>{title}</div>
        </Link>
      </td>
      <td>{topicsCount}</td>
      <td>{commentsCount}</td>
    </tr>
  );
}
