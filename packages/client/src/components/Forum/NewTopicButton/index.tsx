import { useState } from 'react';
import { FetchTopics } from '../../../store/forum/types';
import { Modal, Form, ForumButton } from '../..';

type Props = {
  forumId?: string;
  fetchTopics: FetchTopics;
};

export function NewTopicButton(props: Props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');

  const [isModalActive, setModalActive] = useState(false);
  const handleOpen = () => setModalActive(true);
  const handleClose = () => setModalActive(false);

  function submitTopic(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { fetchTopics, forumId } = props;

    console.log(forumId, title, content, description);

    setTitle('');
    setContent('');
    setDescription('');

    handleClose();
    fetchTopics(forumId);
  }

  return (
    <>
      <ForumButton onClick={handleOpen}>New Topic</ForumButton>

      <Modal
        active={isModalActive}
        setActive={setModalActive}
        title='New topic'>
        <Form title='Submit' onSubmit={submitTopic}>
          <Form.Input
            name='title'
            placeholder='Topic title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <Form.Textarea
            placeholder='Topic description'
            name='description'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <Form.Textarea
            placeholder='Topic content'
            name='content'
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </Form>
      </Modal>
    </>
  );
}
