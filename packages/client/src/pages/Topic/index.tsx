import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ButtonBack,
  NewCommentButton,
  CommentsList,
  Modal,
  Form,
} from 'src/components';
import type {
  TopicProps,
  FetchTopic,
  FetchComments,
  CommentProps,
} from 'src/store/forum/type';
import cls from './styles.module.css';
import classNames from 'classnames';

import { mockTopic, mockComments } from 'src/constants/mockData';

export default function TopicPage() {
  const { topicId, commentId } = useParams<{
    topicId: string;
    commentId: string;
  }>();

  const [topic, setTopic] = useState<TopicProps>({});
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [content, setContent] = useState('');
  const [isModalActive, setIsModalActive] = useState(false);

  const handleOpen = () => setIsModalActive(true);
  const handleClose = () => setIsModalActive(false);
  const handleSetContent = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  function submitComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    //todo send new comment data
    // let authorId???
    // console.log(topicId, content, parentCommentId, authorId);
    console.log(topicId, content, commentId);

    setContent('');

    handleClose();
    if (topicId) {
      fetchTopic(topicId);
    } else {
      console.log('TopicId', topicId);
    }
  }

  const fetchTopic: FetchTopic = topicId => {
    //todo send new comment data
    // let authorId???
    console.log(topicId);

    const topic: TopicProps = mockTopic;
    return topic;
  };

  const fetchComments: FetchComments = topicId => {
    console.log(topicId);

    const comments: CommentProps[] = mockComments;

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

  const clsTopicInfo = classNames('card', cls.topic__info);

  useEffect(() => {
    if (topicId) {
      const topic = fetchTopic(topicId);
      const comments = fetchComments(topicId);
      setTopic(topic);
      setComments(comments);
    }
  }, [topic, comments]);

  return (
    <div className={cls.topic}>
      <ButtonBack />
      <h1 className='main-menu__title'>Community</h1>
      <div className={clsTopicInfo}>
        {topic.title ? (
          <div className={cls.topic__title}>{topic.title}</div>
        ) : null}
        {topic.content ? (
          <div className={cls.topic__content}>{topic.content}</div>
        ) : null}
        {topic.authorName ? (
          <div className={cls.topic__author}>{topic.authorName}</div>
        ) : null}
      </div>
      {comments ? (
        <CommentsList list={comments} handleOpen={handleOpen} />
      ) : null}

      <NewCommentButton handleOpen={handleOpen} />

      <Modal
        active={isModalActive}
        setActive={setIsModalActive}
        title='New Comment'>
        <Form title='Submit' onSubmit={submitComment}>
          <Form.Input
            typeComponent='textarea'
            name='content'
            value={content}
            onChange={handleSetContent}
          />
        </Form>
      </Modal>
    </div>
  );
}
