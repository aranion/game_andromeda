import { useState } from 'react';
import type { FetchTopics } from 'src/store/forum/types';
import { Modal, Form, ButtonStar } from 'src/components';

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

  const handleSetTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleSetDescription = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);
  const handleSetContent = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContent(e.target.value);

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
      <ButtonStar onClick={handleOpen}>New Topic</ButtonStar>

      <Modal
        active={isModalActive}
        setActive={setModalActive}
        title='New topic'>
        <Form title='Submit' onSubmit={submitTopic}>
          <Form.Input
            name='title'
            placeholder='Topic title'
            value={title}
            onChange={handleSetTitle}
          />
          <Form.Input
            typeInput='textarea'
            placeholder='Topic description'
            name='description'
            value={description}
            onChange={handleSetDescription}
          />
          <Form.Input
            typeInput='textarea'
            placeholder='Topic content'
            name='content'
            value={content}
            onChange={handleSetContent}
          />
        </Form>
      </Modal>
    </>
  );
}
