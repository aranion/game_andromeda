import { useState, useEffect } from 'react';
import cls from './styles.module.css';
import classNames from 'classnames';
import type { Comment as CommentProps } from 'src/store/forum/type';
import { Button } from 'src/components';
import { useLazyFetchUserDataQuery, userSelectors } from 'src/store/user';
import { useTypeSelector } from 'src/hooks/useTypeSelector';
import { useLazyDeleteCommentByIdQuery } from 'src/store/forum';

type Props = {
  handleOpen: () => void;
} & CommentProps;

export const Comment = (props: Props) => {
  const { authorId, content, id } = props;
  const { userData } = useTypeSelector(userSelectors.all);

  const clsList = classNames('card', cls.comment);

  const [userName, setUserName] = useState('');

  const [fetchUser] = useLazyFetchUserDataQuery();
  const [deleteComment] = useLazyDeleteCommentByIdQuery();

  useEffect(() => {
    fetchUser(`${authorId}`)
      .then(res => {
        if (res.data) {
          setUserName(res.data.login);
        }
      })
      .catch(console.error);
  }, []);

  const handleDeleteComment = () => {
    deleteComment(id).catch(console.error);
  };

  return (
    <li className={clsList} id={`${id}`}>
      <div className={cls.comment__author}>Author: {userName}</div>
      <br />
      <div className={cls.comment__content}>{content}</div>
      {userData.id === authorId && (
        <Button onClick={handleDeleteComment}>Delete</Button>
      )}
    </li>
  );
};
