import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, ButtonBack, NewCommentButton, Comment } from 'src/components';
import type {
  TopicProps,
  CommentProps,
  FetchComments,
  FetchTopic,
} from 'src/store/forum/type';
import styles from './styles.module.css';

export default function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>();

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

    const comments: CommentProps[] = [
      {
        id: 1,
        author: 'Jane',
        content: 'First interesting comment',
      },
      {
        id: 2,
        author: 'David',
        content:
          'Second interesting comment (Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.)',
      },
      {
        id: 3,
        author: 'Jane',
        content: 'First interesting comment',
      },
      {
        id: 4,
        author: 'David',
        content:
          'Second interesting comment (Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.)',
      },
      {
        id: 5,
        author: 'Jane',
        content: 'First interesting comment',
        parentCommentId: 2,
      },
      {
        id: 6,
        author: 'David',
        content:
          'Second interesting comment (Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.)',
      },
      {
        id: 7,
        author: 'Kate',
        content: 'Third interesting comment',
      },
    ];

    return comments.map(comment => {
      const { parentCommentId } = comment;
      if (parentCommentId) {
        const parent = comments.find(comment => comment.id === parentCommentId);
        comment.parentCommentAuthor = parent?.author;
        comment.parentCommentPreview = `${parent?.content.substring(0, 90)}...`;
      }
      return comment;
    });
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
    <div className={styles.topic}>
      <ButtonBack />
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
          const {
            id,
            content,
            author,
            parentCommentId,
            parentCommentPreview,
            parentCommentAuthor,
          } = comment;
          return (
            <Comment
              key={id}
              id={id}
              content={content}
              author={author}
              topicId={topicId}
              fetchComments={fetchComments}
              parentCommentId={parentCommentId}
              parentCommentPreview={parentCommentPreview}
              parentCommentAuthor={parentCommentAuthor}
            />
          );
        })}
      </div>
      {topicId ? (
        <NewCommentButton topicId={topicId} fetchComments={fetchComments} />
      ) : null}
    </div>
  );
}
