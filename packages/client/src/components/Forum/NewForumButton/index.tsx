import { useState } from 'react';
import { FetchForums } from 'src/store/forum/types';
import { Modal, Form, ButtonStar } from '../..';

type Props = {
  fetchForums: FetchForums;
};

export function NewForumButton(props: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isModalActive, setModalActive] = useState(false);
  const handleOpen = () => setModalActive(true);
  const handleClose = () => setModalActive(false);

  function submitForum(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { fetchForums } = props;

    console.log(title, description);

    setTitle('');
    setDescription('');

    handleClose();
    fetchForums();
  }

  return (
    <>
      <ButtonStar onClick={handleOpen}>New Forum</ButtonStar>

      <Modal
        active={isModalActive}
        setActive={setModalActive}
        title='New forum'>
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
            onChange={e => setDescription(e.target.value)}
          />
        </Form>
      </Modal>
    </>
  );
}
