import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TopicItem } from '../../components/Forum/TopicItem';
import { NewTopicButton } from '../../components/Forum/NewTopicButton';
import {
  TopicProps,
  FetchTopics,
  FetchForumName,
} from '../../store/forum/types';
import { Button, Table, Star } from '../../components';

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
  const navigate = useNavigate();

  const [topics, setTopics] = useState<TopicProps[]>([]);
  const [forumName, setforumName] = useState<string>('');

  const fetchForumName: FetchForumName = forumId => {
    console.log(forumId);
    return 'Game Devlog - News';
  };

  const fetchTopics: FetchTopics = forumId => {
    console.log(forumId);

    const topics = [];
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

      <Button className='button__back' onClick={() => navigate(-1)}>
        🠔
      </Button>

      <h1 className='main-title'>{forumName}</h1>
      <Table>
        <thead>
          <tr>
            <th>Topics</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic: TopicProps) => (
            <TopicItem
              key={topic.topicId}
              topicId={topic.topicId}
              title={topic.title}
              commentCount={topic.commentCount}
            />
          ))}
        </tbody>
      </Table>
      <NewTopicButton forumId={forumId} fetchTopics={fetchTopics} />
    </div>
  );
}
