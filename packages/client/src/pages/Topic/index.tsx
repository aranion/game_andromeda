import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  ButtonBack,
  NewCommentButton,
  Comment,
  ButtonFullscreen,
} from 'src/components';
import type {
  TopicProps,
  CommentProps,
  FetchComments,
  FetchTopic,
} from 'src/store/forum/types';
import styles from './styles.module.css';

export default function TopicPage() {
  const { topicId } = useParams<{ topicId?: string }>();
  const fullscrinableElem = useRef(null);

  const [topic, setTopic] = useState<TopicProps>();
  const [comments, setComments] = useState<CommentProps[]>([]);

  const fetchTopic: FetchTopic = topicId => {
    console.log(topicId);

    const topic: TopicProps = {
      id: 111,
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
        id: 1,
        author: 'Jane',
        content: 'First interesting comment',
        parentCommentId: 1,
      },
      {
        id: 2,
        author: 'David',
        content:
          'Second interesting comment (Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.)',
        parentCommentId: 3,
      },
      {
        id: 3,
        author: 'Jane',
        content: 'First interesting comment',
        parentCommentId: 1,
      },
      {
        id: 4,
        author: 'David',
        content:
          'Second interesting comment (Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.)',
        parentCommentId: 3,
      },
      {
        id: 5,
        author: 'Jane',
        content: 'First interesting comment',
        parentCommentId: 1,
      },
      {
        id: 6,
        author: 'David',
        content:
          'Second interesting comment (Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.)',
        parentCommentId: 3,
      },
      {
        id: 7,
        author: 'Kate',
        content: 'Third interesting comment',
        parentCommentId: 1,
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
    <div className={styles.topic} ref={fullscrinableElem}>
      <ButtonBack />
      <ButtonFullscreen elemRef={fullscrinableElem} />

      <h1 className='main-menu__title' id='11111'>
        Community
      </h1>
      <Card className={styles.topic__info}>
        <div className={styles.topic__title}>{topic?.title || ''}</div>
        <div className={styles.topic__content}>{topic?.content || ''}</div>
        <div className={styles.topic__author}>{topic?.author || ''}</div>
      </Card>
      <div>
        {comments.map(comment => {
          const { id, content, author, parentCommentId } = comment;
          return (
            <Comment
              key={id}
              id={id}
              content={content}
              author={author}
              parentCommentId={parentCommentId}
            />
          );
        })}
      </div>
      <NewCommentButton topicId={topicId} fetchComments={fetchComments} />
    </div>
  );
}
