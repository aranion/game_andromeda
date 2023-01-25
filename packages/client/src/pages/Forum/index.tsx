import { useEffect, useState } from 'react';
import {
  ButtonBack,
  TopicItem,
  Modal,
  Form,
  ButtonStar,
  Loader,
  TitlePage,
} from 'src/components';
import cls from './styles.module.css';
import classNames from 'classnames';
import { useTypeSelector } from 'src/hooks/useTypeSelector';
import {
  forumSelectors,
  useLazyAddTopicQuery,
  useLazyFetchAllTopicsQuery,
} from 'src/store/forum';
import { useActions } from 'src/hooks/useActions';
import { userSelectors } from 'src/store/user';

export default function ForumPage() {
  const topics = useTypeSelector(forumSelectors.topics);
  const { userData } = useTypeSelector(userSelectors.all);
  const { id: authorId } = userData;

  const { setTopics } = useActions();

  const [fetchAllTopics, { isLoading: isLoadingTopics }] =
    useLazyFetchAllTopicsQuery();
  const [fetchAddTopic, { isLoading: isLoadingAddTopic }] =
    useLazyAddTopicQuery();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isModalActive, setIsModalActive] = useState(false);

  const handleOpen = () => setIsModalActive(true);
  const handleClose = () => setIsModalActive(false);
  const handleSetTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleSetContent = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  const clsTable = classNames('card', cls.table);

  const getTopics = () => {
    fetchAllTopics(false)
      .then(res => {
        if (res?.data) {
          setTopics(res.data);
        } else {
          if (res.error && 'data' in res.error) {
            throw new Error((res.error.data as Error).message);
          }
        }
      })
      .catch(console.error);
  };

  const clearFieldsModal = () => {
    setTitle('');
    setContent('');
  };

  function submitTopic(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (authorId) {
      fetchAddTopic({ authorId, title, content })
        .then(res => {
          if (res.error && 'data' in res.error) {
            throw new Error((res.error.data as Error).message);
          } else {
            clearFieldsModal();
            handleClose();
            getTopics();
          }
        })
        .catch(console.error);
    }
  }

  useEffect(() => {
    getTopics();
  }, []);

  if (isLoadingTopics) {
    return <Loader />;
  }

  return (
    <div className={cls.forum}>
      <ButtonBack />
      <TitlePage>Community</TitlePage>

      <table className={clsTable}>
        <thead>
          <tr>
            <th className={cls.table__th}>Topics</th>
            <th className={cls.table__th}>Comments</th>
          </tr>
        </thead>
        <tbody>
          {topics.map(topic => (
            <TopicItem key={topic.id} {...topic} />
          ))}
        </tbody>
      </table>

      <ButtonStar onClick={handleOpen}>New Topic</ButtonStar>

      <Modal
        active={isModalActive}
        setActive={setIsModalActive}
        title='New topic'>
        {isLoadingAddTopic && <Loader position='absolute' />}
        <Form title='Submit' onSubmit={submitTopic}>
          <Form.Input
            typeComponent='input'
            name='title'
            placeholder='Topic title'
            value={title}
            onChange={handleSetTitle}
          />
          <Form.Input
            typeComponent='textarea'
            placeholder='Topic content'
            name='content'
            value={content}
            onChange={handleSetContent}
          />
        </Form>
      </Modal>
    </div>
  );
}
