import { useEffect, useState } from 'react';
import type { TopicProps, FetchTopics } from 'src/store/forum/type';
import { ButtonBack, TopicItem, NewTopicButton } from 'src/components';
import cls from './styles.module.css';
import classNames from 'classnames';

import { mockForumPage } from 'src/constants/mockData';

export default function ForumPage() {
  const [topics, setTopics] = useState<TopicProps[]>([]);

  const fetchTopics: FetchTopics = () => {
    // const topics: TopicProps[] = [];
    const topics: TopicProps[] = mockForumPage;
    return topics;
  };

  const clsTTable = classNames('card', cls.table);

  useEffect(() => {
    setTopics(fetchTopics());
  }, []);

  return (
    <div className={cls.forum}>
      <ButtonBack />

      <h1 className='main-menu__title'>Community</h1>
      <table className={clsTTable}>
        <thead>
          <tr>
            <th className={cls.table__th}>Topics</th>
            <th className={cls.table__th}>Comments</th>
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
