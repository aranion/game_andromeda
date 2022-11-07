import { useState } from 'react';
import { FetchForums } from '../../../store/forum/types';
import { Button, Modal, Star, Form } from '../..';

type Props = {
  fetchForums: FetchForums;
};

export function NewForumButton(props: Props) {
  const [title, setTitle] = useState('');
  const [description, setContent] = useState('');

  const [madalActive, setModalActive] = useState(false);
  const handleOpen = () => setModalActive(true);
  const handleClose = () => setModalActive(false);

  function submitForum(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { fetchForums } = props;

    console.log(title, description);

    setTitle('');
    setContent('');

    handleClose();
    fetchForums();
  }

  return (
    <>
      <div className='forum__button'>
        <Star size='small' relative={true} />
        <Button
          className='button_center'
          onClick={handleOpen}
          children={'New Forum'}
        />
        <Star size='small' relative={true} />
      </div>

      <Modal active={madalActive} setActive={setModalActive} title='New forum'>
        <Form title='Submit' onSubmit={submitForum}>
          <Form.Input
            placeholder='Forum title'
            name='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <Form.Textarea
            placeholder='Forum description'
            name='description'
            value={description}
            onChange={e => setContent(e.target.value)}
          />
        </Form>
      </Modal>
    </>
  );
}
