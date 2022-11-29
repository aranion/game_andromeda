import { Link } from 'react-router-dom';
import { RouterList } from 'src/router/routerList';
import type { TopicProps } from 'src/store/forum/types';
import styles from './styles.module.css';

export function TopicItem(props: Props) {
  const { topicId, title, commentCount } = props;

  return (
    <tr>
      <td className={styles.item}>
        <Link
          className={styles.item__link}
          to={`${RouterList.FORUM_TOPIC}/${topicId}`}>
          <div>{title}</div>
        </Link>
      </td>
      <td className={styles.item}>{commentCount}</td>
    </tr>
  );
}

type Props = TopicProps;
