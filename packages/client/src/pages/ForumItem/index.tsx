import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import type {
  TopicProps,
  FetchTopics,
  FetchForumName,
} from '../../../../server/store/forum/types';
import {
  ButtonBack,
  TopicItem,
  NewTopicButton,
  ButtonFullscreen,
} from 'src/components';
import styles from './styles.module.css';

export default function ForumItemPage() {
  const { forumId } = useParams<{ forumId?: string }>();
  const fullscrinableElem = useRef(null);

  const [topics, setTopics] = useState<TopicProps[]>([]);
  const [forumName, setforumName] = useState<string>('');

  const fetchForumName: FetchForumName = forumId => {
    console.log(forumId);
    return 'Game Devlog - News';
  };

  const fetchTopics: FetchTopics = forumId => {
    console.log(forumId);

    const topics: TopicProps[] = [];
    topics.push(
      {
        topicId: '111',
        title: 'Test toppic title',
        commentCount: '111',
      },
      {
        topicId: '222',
        title:
          'Test toppic title Test toppic title Test toppic title Test toppic title Test toppic title Test toppic title Test toppic title Test toppic title Test toppic title Test toppic title ',
        commentCount: '1',
      }
    );
    return topics;
  };

  useEffect(() => {
    if (forumId) {
      const forumName = fetchForumName(forumId);
      setforumName(forumName);
      const topics = fetchTopics(forumId);
      setTopics(topics);
    }
  }, []);

  return (
    <div className={styles.forum} ref={fullscrinableElem}>
      <ButtonBack />
      <ButtonFullscreen elemRef={fullscrinableElem} />

      <h1 className='main-menu__title'>{forumName}</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.table__th}>Topics</th>
            <th className={styles.table__th}>Comments</th>
          </tr>
        </thead>
        <tbody>
          {topics.map(topic => {
            const { topicId, title, commentCount } = topic;
            return (
              <TopicItem
                key={topicId}
                topicId={topicId}
                title={title}
                commentCount={commentCount}
              />
            );
          })}
        </tbody>
      </table>
      <NewTopicButton forumId={forumId} fetchTopics={fetchTopics} />
    </div>
  );
}
