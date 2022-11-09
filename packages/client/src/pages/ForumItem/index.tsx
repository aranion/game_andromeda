import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type {
  TopicProps,
  FetchTopics,
  FetchForumName,
} from '../../store/forum/types';
import { ButtonBack, Star, TopicItem, NewTopicButton } from '../../components';

const configStar = [
  { top: '7%', left: '3%' },
  { top: '2%', left: '15%' },
  { top: '3%', left: '80%' },
  { top: '13%', left: '89%' },
  { top: '87%', left: '3%' },
  { top: '76%', left: '89%' },
];

export default function ForumItemPage() {
  const { forumId } = useParams<{ forumId?: string }>();

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
    <div className='forum'>
      {configStar.map((item, idx) => (
        <Star key={idx} top={item.top} left={item.left} />
      ))}

      <ButtonBack />

      <h1 className='main-title'>{forumName}</h1>
      <table className='main-table'>
        <thead>
          <tr>
            <th className='main-table__th'>Topics</th>
            <th className='main-table__th'>Comments</th>
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
