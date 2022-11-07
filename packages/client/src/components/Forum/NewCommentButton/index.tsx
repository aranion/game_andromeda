import { useState } from 'react';
import { FetchComments } from '../../../store/forum/types';
import { Button, Modal, Textarea, Star } from '../..';
import { Form } from '../../Form';

type Props = {
  topicId: string | undefined;
  fetchComments: FetchComments;
};

export function NewCommentButton(props: Props) {
  const [content, setContent] = useState('');

  const [madalActive, setModalActive] = useState(false);
  const handleOpen = () => setModalActive(true);
  const handleClose = () => setModalActive(false);

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
      <div className='forum__button'>
        <Star size='small' relative={true} />
        <Button
          className='button_center'
          onClick={handleOpen}
          children={'New Comment'}
        />
        <Star size='small' relative={true} />
      </div>

      <Modal
        active={madalActive}
        setActive={setModalActive}
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
