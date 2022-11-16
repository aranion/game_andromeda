import { useState } from 'react';
import type { FetchComments } from 'src/store/forum/types';
import { Modal, Form, ButtonStar } from 'src/components';

type Props = {
  topicId: string | undefined;
  fetchComments: FetchComments;
};

export function NewCommentButton(props: Props) {
  const [content, setContent] = useState('');

  const [isModalActive, setisModalActive] = useState(false);
  const handleOpen = () => setisModalActive(true);
  const handleClose = () => setisModalActive(false);

  const handleSetContent = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContent(e.target.value);

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
      <ButtonStar onClick={handleOpen}>New Comment</ButtonStar>

      <Modal
        active={isModalActive}
        setActive={setisModalActive}
        title='New Comment'>
        <Form title='Submit' onSubmit={submitComment}>
          <Form.Input
            typeInput='textarea'
            name='content'
            value={content}
            onChange={handleSetContent}
          />
        </Form>
      </Modal>
    </>
  );
}
