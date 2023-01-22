import { useState } from 'react';
import { Modal, Form, ButtonStar } from 'src/components';
import type { FetchTopics } from 'src/store/forum/type';

type Props = {
  fetchTopics: FetchTopics;
};

export function NewTopicButton(props: Props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isModalActive, setIsModalActive] = useState(false);

  const handleOpen = () => setIsModalActive(true);
  const handleClose = () => setIsModalActive(false);

  const handleSetTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleSetContent = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  function submitTopic(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { fetchTopics } = props;

    //todo send new comment data
    // let authorId???
    // console.log(title, content, authorId);
    console.log(title, content);

    setTitle('');
    setContent('');

    handleClose();
    fetchTopics();
  }

  return (
    <>
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
    </>
  );
}
