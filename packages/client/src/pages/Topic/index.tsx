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
} from 'src/store/forum/types';
import styles from './styles.module.css';

export default function TopicPage() {
  const { topicId } = useParams<{ topicId?: string }>();
  const fullscrinableElem = useRef(null);

  const [topic, setTopic] = useState<TopicProps>();
  const [comments, setComments] = useState<CommentProps[]>([]);

  const fetchTopic = (topicId: string): TopicProps => {
    console.log(topicId);

    const topic: TopicProps = {
      topicId: '111',
      topicTitle: 'Title of very interesting topic',
      topicContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      topicAuthor: 'Amanda',
    };
    return topic;
  };

  const fetchComments: FetchComments = topicId => {
    console.log(topicId);

    const comments: CommentProps[] = [];
    comments.push(
      {
        commentId: '1',
        commentAuthor: 'Jane',
        commentContent: 'First interesting comment',
      },
      {
        commentId: '2',
        commentAuthor: 'David',
        commentContent:
          'Second interesting comment (Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.)',
      },
      {
        commentId: '3',
        commentAuthor: 'Kate',
        commentContent: 'Third interesting comment',
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

      <h1 className='main-menu__title'>Community</h1>
      <Card className={styles.topic__info}>
        <div className={styles.topic__title}>{topic?.topicTitle || ''}</div>
        <div className={styles.topic__content}>{topic?.topicContent || ''}</div>
        <div className={styles.topic__author}>{topic?.topicAuthor || ''}</div>
      </Card>
      <div>
        {comments.map(comment => {
          const { commentId, commentContent, commentAuthor } = comment;
          return (
            <Comment
              key={commentId}
              commentId={commentId}
              commentContent={commentContent}
              commentAuthor={commentAuthor}
            />
          );
        })}
      </div>
      <NewCommentButton topicId={topicId} fetchComments={fetchComments} />
    </div>
  );
}
