import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ButtonBack,
  NewCommentButton,
  CommentsList,
  Modal,
  Form,
  TitlePage,
  Loader,
} from 'src/components';
import type { Topic, Comment } from 'src/store/forum/type';
import cls from './styles.module.css';
import classNames from 'classnames';
import {
  useLazyCreateCommentByIdQuery,
  useLazyDeleteTopicByIdQuery,
  useLazyFetchTopicAllCommentsQuery,
  useLazyFetchTopicByIdQuery,
} from 'src/store/forum';
import { useTypeSelector } from 'src/hooks/useTypeSelector';
import { useLazyFetchUserDataQuery, userSelectors } from 'src/store/user';
import { RouterList } from 'src/router/routerList';

export default function TopicPage() {
  const { topicId } = useParams<ParamsUrl>();

  const navigate = useNavigate();

  const [topic, setTopic] = useState<Topic | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [content, setContent] = useState('');
  const [isModalActive, setIsModalActive] = useState(false);
  const [authorNameTopic, setAuthorNameTopic] = useState('');

  const { userData } = useTypeSelector(userSelectors.all);

  const [fetchTopicById, { isLoading: isLoadingTopic }] =
    useLazyFetchTopicByIdQuery();
  const [fetchAllComments, { isLoading: isLoadingComments }] =
    useLazyFetchTopicAllCommentsQuery();
  const [createComment] = useLazyCreateCommentByIdQuery();
  const [fetchUser] = useLazyFetchUserDataQuery();
  const [deleteTopic, { isLoading: isLoadingDeleteTopic }] =
    useLazyDeleteTopicByIdQuery();

  const handleOpen = () => setIsModalActive(true);
  const handleClose = () => setIsModalActive(false);
  const handleSetContent = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  const getComments = (topicId: number) => {
    fetchAllComments(topicId)
      .then(res => {
        if (res?.data) {
          setComments(res.data);
        }
      })
      .catch(console.error);
  };

  const getTopic = (topicId: number) => {
    fetchTopicById(topicId)
      .then(res => {
        if (res?.data) {
          setTopic(res.data);

          fetchUser(`${res.data.authorId}`)
            .then(resUser => {
              if (resUser?.data) {
                setAuthorNameTopic(resUser.data.login);
              }
            })
            .catch(console.error);
        }
      })
      .catch(console.error);
  };

  const setComment = (topicId: number) => {
    if (userData.id) {
      createComment({
        body: { authorId: userData.id, content },
        topicId,
      })
        .then(res => {
          if (res?.data) {
            getTopic(topicId);
            getComments(topicId);
            setContent('');
            handleClose();
          }
        })
        .catch(console.error);
    }
  };

  function submitComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (topicId && !isNaN(+topicId)) {
      setComment(Number(topicId));
    }
  }

  const handleDeleteTopic = () => {
    if (topicId && !isNaN(+topicId)) {
      deleteTopic(+topicId)
        .then(() => {
          navigate(RouterList.FORUM);
        })
        .catch(console.error);
    }
  };

  const clsTopicInfo = classNames('card', cls.topic__info);

  useEffect(() => {
    if (topicId && !isNaN(+topicId)) {
      getTopic(+topicId);
      getComments(+topicId);
    }
  }, []);

  return (
    <div className={cls.topic}>
      <ButtonBack />
      <TitlePage>Community</TitlePage>
      {(isLoadingTopic || isLoadingComments) && <Loader />}
      <div className={clsTopicInfo}>
        {isLoadingDeleteTopic && <Loader position='absolute' />}
        {topic?.title ? (
          <div className={cls.topic__title}>{topic.title}</div>
        ) : null}
        <div className={cls.topic__author}>
          Author: {authorNameTopic || 'Name not found...'}
        </div>
        {topic?.content ? (
          <div className={cls.topic__content}>{topic?.content}</div>
        ) : null}
        {topic?.authorId === userData.id && (
          <button onClick={handleDeleteTopic} className={cls.topic__close}>
            X
          </button>
        )}
      </div>

      <NewCommentButton handleOpen={handleOpen} />

      {comments ? (
        <CommentsList
          list={comments}
          handleOpen={handleOpen}
          getComments={getComments}
        />
      ) : null}

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

type ParamsUrl = {
  topicId: string;
};
