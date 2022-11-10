import { Link } from 'react-router-dom';
import { ForumProps } from 'src/store/forum/types';
import { RouterList } from 'src/router/routerList';

export function ForumItem(props: ForumProps) {
  const { forumId, title, topicsCount, commentsCount } = props;

  return (
    <tr id={forumId}>
      <td className='main-table__td'>
        <Link className='main-table__a' to={`${RouterList.FORUM}/${forumId}`}>
          <div>{title}</div>
        </Link>
      </td>
      <td className='main-table__td'>{topicsCount}</td>
      <td className='main-table__td'>{commentsCount}</td>
    </tr>
  );
}
