import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TopicItem } from '../../components/Forum/TopicItem';
import { NewTopicButton } from '../../components/Forum/NewTopicButton';
import { TopicProps, FetchTopics } from '../../components/Forum/types';
import { Button, Table } from '../../components';

export default function ForumItemPage() {
  const { forumId } = useParams<{ forumId?: string }>();
  const navigate = useNavigate();

  const [topics, setTopics] = useState<TopicProps[]>([]);

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
      const topics = fetchTopics(forumId);
      setTopics(topics);
    }
  }, []);

  return (
    <div className='forum'>
      <Button className='button__back' onClick={() => navigate(-1)}>
        🠔
      </Button>
      <h1 className='main-title'>Community</h1>
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
