import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  ButtonBack,
  Star,
  NewCommentButton,
  Comment,
} from 'src/components';
import './style.css';
import type {
  TopicProps,
  CommentProps,
  FetchComments,
} from 'src/store/forum/types';

const configStar = [
  { top: '7%', left: '3%' },
  { top: '2%', left: '15%' },
  { top: '3%', left: '80%' },
  { top: '13%', left: '89%' },
  { top: '87%', left: '3%' },
  { top: '76%', left: '89%' },
];

export default function TopicPage() {
  const { topicId } = useParams<{ topicId?: string }>();

  const [topic, setTopic] = useState<TopicProps>();
  const [comments, setComments] = useState<CommentProps[]>([]);

  const fetchTopic = (topicId: string): TopicProps => {
    console.log(topicId);

    const topic: TopicProps = {
      topicId: '111',
      title: 'Title of very interesting topic',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Amanda',
    };
    return topic;
  };

  const fetchComments: FetchComments = topicId => {
    console.log(topicId);

    const comments: CommentProps[] = [];
    comments.push(
      {
        id: '1',
        author: 'Jane',
        content: 'First interesting comment',
      },
      {
        id: '2',
        author: 'David',
        content:
          'Second interesting comment (Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.)',
      },
      {
        id: '3',
        author: 'Kate',
        content: 'Third interesting comment',
      }
    );
    return comments;
  };

  useEffect(() => {
    if (topicId) {
      const topic = fetchTopic(topicId);
      const comments = fetchComments(topicId);
      setTopic(topic);
      setComments(comments);
    }
  }, []);

  return (
    <div className='forum'>
      {configStar.map((item, idx) => (
        <Star key={idx} top={item.top} left={item.left} />
      ))}

      <ButtonBack />

      <h1 className='main-title'>Community</h1>
      <Card className='topic__info'>
        <div className='topic__title'>{topic?.title || ''}</div>
        <div className='topic__content'>{topic?.content || ''}</div>
        <div className='topic__author'>{topic?.author || ''}</div>
      </Card>
      <div>
        {comments.map(comment => {
          const { id, content, author } = comment;
          return <Comment key={id} id={id} content={content} author={author} />;
        })}
      </div>
      <NewCommentButton topicId={topicId} fetchComments={fetchComments} />
    </div>
  );
}
