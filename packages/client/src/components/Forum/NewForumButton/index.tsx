import { useState } from 'react';
import { Modal, Form, ButtonStar } from 'src/components';
import type { FetchForums } from '../../../../../server/store/forum/types';

type Props = {
  fetchForums: FetchForums;
};

export function NewForumButton(props: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isModalActive, setIsModalActive] = useState(false);

  const handleOpen = () => setIsModalActive(true);
  const handleClose = () => setIsModalActive(false);

  const handleSetTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleSetDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
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
        setActive={setIsModalActive}
        title='New forum'>
        <Form title='Submit' onSubmit={submitForum}>
          <Form.Input
            typeComponent='input'
            placeholder='Forum title'
            name='title'
            value={title}
            onChange={handleSetTitle}
          />
          <Form.Input
            typeComponent='textarea'
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
