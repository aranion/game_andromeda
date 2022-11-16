import { useState } from 'react';
import type { FetchForums } from 'src/store/forum/types';
import { Modal, Form, ButtonStar } from 'src/components';

type Props = {
  fetchForums: FetchForums;
};

export function NewForumButton(props: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isModalActive, setModalActive] = useState(false);
  const handleOpen = () => setModalActive(true);
  const handleClose = () => setModalActive(false);

  const handleSetTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleSetDescription = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);

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
            onChange={handleSetTitle}
          />
          <Form.Input
            typeInput='textarea'
            placeholder='Forum description'
            name='description'
            value={description}
            onChange={handleSetDescription}
          />
        </Form>
      </Modal>
    </>
  );
}
