import { useEffect, useState } from 'react';
import type { TopicProps, FetchTopics } from 'src/store/forum/type';
import { ButtonBack, TopicItem, Modal, Form, ButtonStar } from 'src/components';
import cls from './styles.module.css';
import classNames from 'classnames';
// import { useTypeSelector } from 'src/hooks/useTypeSelector';
// import { forumSelectors } from 'src/store/forum';

import { mockForumPage } from 'src/constants/mockData';

export default function ForumPage() {
  const [topics, setTopics] = useState<TopicProps[]>([]);

  // const forumData = useTypeSelector(forumSelectors.topics);
  const fetchTopics: FetchTopics = () => {
    // const topics: TopicProps[] = [];

    const topics = mockForumPage;
    return topics;
  };

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

  function submitTopic(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //todo send new comment data
    // let authorId???
    // console.log(title, content, authorId);
    console.log(title, content);

    setTitle('');
    setContent('');
    handleClose();

    fetchTopics();
  }

  useEffect(() => {
    //   setTopics(forumData);
    // }, [forumData]);
    setTopics(mockForumPage);
  }, [mockForumPage]);

  return (
    <div className={cls.forum}>
      <ButtonBack />

      <h1 className='main-menu__title'>Community</h1>

      <table className={clsTable}>
        <thead>
          <tr>
            <th className={cls.table__th}>Topics</th>
            <th className={cls.table__th}>Comments</th>
          </tr>
        </thead>
        <tbody>
          {topics.map(topic => {
            const { id, title, commentCount } = topic;
            return (
              <TopicItem
                key={id}
                id={id}
                title={title}
                commentCount={commentCount}
              />
            );
          })}
        </tbody>
      </table>

      <ButtonStar onClick={handleOpen}>New Topic</ButtonStar>

      <Modal
        active={isModalActive}
        setActive={setIsModalActive}
        title='New topic'>
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
