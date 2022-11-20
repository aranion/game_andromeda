import { useEffect, useState } from 'react';
import type { ForumProps, FetchForums } from 'src/store/forum/types';
import { ButtonBack, ForumItem, NewForumButton } from 'src/components';
import styles from './styles.module.css';

export default function ForumPage() {
  const [forums, setForums] = useState<ForumProps[]>([]);

  const fetchForums: FetchForums = () => {
    const forums: ForumProps[] = [];
    forums.push(
      {
        forumId: '111',
        title: 'Game Devlog - News',
        topicsCount: '1',
        commentsCount: '12',
      },
      {
        forumId: '222',
        title: 'Feedback Forum',
        topicsCount: '126',
        commentsCount: '12',
      },
      {
        forumId: '333',
        title: 'Cavern',
        topicsCount: '12',
        commentsCount: '12',
      },
      {
        forumId: '444',
        title: 'Game Devlog - test forum',
        topicsCount: '12',
        commentsCount: '12',
      }
    );

    return forums;
  };

  useEffect(() => {
    setForums(fetchForums());
  }, []);

  return (
    <div className={styles.forum}>
      <ButtonBack />

      <h1 className='main-menu__title'>Community</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.table__th}>Forums</th>
            <th className={styles.table__th}>Topics</th>
            <th className={styles.table__th}>Comments</th>
          </tr>
        </thead>
        <tbody>
          {forums.map(forum => {
            const { forumId, title, topicsCount, commentsCount } = forum;
            return (
              <ForumItem
                key={forumId}
                forumId={forumId}
                title={title}
                topicsCount={topicsCount}
                commentsCount={commentsCount}
              />
            );
          })}
        </tbody>
      </table>
      <NewForumButton fetchForums={fetchForums} />
    </div>
  );
}
