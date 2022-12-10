import { Link } from 'react-router-dom';
import type { ForumProps } from '../../../../../server//store/forum/types';
import { RouterList } from 'src/router/routerList';
import styles from './styles.module.css';

export function ForumItem(props: ForumProps) {
  const { forumId, title, topicsCount, commentsCount } = props;

  return (
    <tr id={forumId}>
      <td className={styles.item}>
        <Link
          className={styles.item__link}
          to={`${RouterList.FORUM}/${forumId}`}>
          <div>{title}</div>
        </Link>
      </td>
      <td className={styles.item}>{topicsCount}</td>
      <td className={styles.item}>{commentsCount}</td>
    </tr>
  );
}
