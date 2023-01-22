import { useEffect, useState } from 'react';
import type { TopicProps, FetchTopics } from 'src/store/forum/type';
import { ButtonBack, TopicItem, NewTopicButton } from 'src/components';
import styles from './styles.module.css';

export default function ForumPage() {
  const [topics, setTopics] = useState<TopicProps[]>([]);

  const fetchTopics: FetchTopics = () => {
    const topics: TopicProps[] = [];
    topics.push(
      {
        id: 111,
        title: 'Test toppic title',
        commentCount: 1111,
      },
      {
        id: 222,
        title:
          'Test toppic title Test toppic title Test toppic title Test toppic title Test toppic title Test toppic title Test toppic title Test toppic title Test toppic title Test toppic title ',
        commentCount: 1,
      }
    );
    return topics;
  };

  useEffect(() => {
    setTopics(fetchTopics());
  }, []);

  return (
    <div className={styles.forum}>
      <ButtonBack />

      <h1 className='main-menu__title'>Community</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.table__th}>Topics</th>
            <th className={styles.table__th}>Comments</th>
          </tr>
        </thead>
        <tbody>
          {topics.map(topic => {
            const { id, title, commentCount } = topic;
            return (
              <TopicItem
                key={id}
                id={id}
                title={title}
                commentCount={commentCount}
              />
            );
          })}
        </tbody>
      </table>
      <NewTopicButton fetchTopics={fetchTopics} />
    </div>
  );
}
