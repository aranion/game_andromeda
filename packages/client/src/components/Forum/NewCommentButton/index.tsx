import { useState } from 'react';
import { Modal, Form, ButtonStar } from 'src/components';
import type { FetchComments } from 'src/store/forum/type';

type Props = {
  topicId: string;
  parentCommentId?: number;
  fetchComments: FetchComments;
};

export function NewCommentButton(props: Props) {
  const [content, setContent] = useState('');
  const [isModalActive, setIsModalActive] = useState(false);

  const handleOpen = () => setIsModalActive(true);
  const handleClose = () => setIsModalActive(false);

  const handleSetContent = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  function submitComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { fetchComments, topicId, parentCommentId } = props;

    //todo send new comment data
    // let authorId???
    // console.log(topicId, content, parentCommentId, authorId);
    console.log(topicId, content, parentCommentId);

    setContent('');

    handleClose();
    if (topicId) {
      fetchComments(topicId);
    } else {
      console.log('topicId undefined', topicId);
    }
  }

  return (
    <>
      <ButtonStar onClick={handleOpen}>New Comment</ButtonStar>

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
    </>
  );
}
