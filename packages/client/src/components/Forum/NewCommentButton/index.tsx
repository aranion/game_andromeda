import { useState } from 'react';
import { FetchComments } from 'src/store/forum/types';
import { Modal, Form, ForumButton } from '../..';

type Props = {
  topicId: string | undefined;
  fetchComments: FetchComments;
};

export function NewCommentButton(props: Props) {
  const [content, setContent] = useState('');

  const [isModalActive, setisModalActive] = useState(false);
  const handleOpen = () => setisModalActive(true);
  const handleClose = () => setisModalActive(false);

  function submitComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { fetchComments, topicId } = props;

    console.log(topicId, content);

    setContent('');

    handleClose();
    fetchComments(topicId);
  }

  return (
    <>
      <ForumButton onClick={handleOpen}>New Comment</ForumButton>

      <Modal
        active={isModalActive}
        setActive={setisModalActive}
        title='New Comment'>
        <Form title='Submit' onSubmit={submitComment}>
          <Form.Textarea
            name='content'
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </Form>
      </Modal>
    </>
  );
}
