import { useState, useEffect } from 'react';
import cls from './styles.module.css';
import classNames from 'classnames';
import type { Comment as CommentProps } from 'src/store/forum/type';
import { Button, Loader } from 'src/components';
import { useLazyFetchUserDataQuery, userSelectors } from 'src/store/user';
import { useTypeSelector } from 'src/hooks/useTypeSelector';
import { useLazyDeleteCommentByIdQuery } from 'src/store/forum';
import { useParams } from 'react-router-dom';

type Props = {
  handleOpen: () => void;
  getComments: (id: number) => void;
} & CommentProps;

export const Comment = (props: Props) => {
  const { topicId } = useParams<ParamsUrl>();
  const { authorId, content, id, getComments } = props;
  const { userData } = useTypeSelector(userSelectors.all);

  const clsList = classNames('card', cls.comment);

  const [userName, setUserName] = useState('');

  const [fetchUser] = useLazyFetchUserDataQuery();
  const [deleteComment] = useLazyDeleteCommentByIdQuery();
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    deleteComment(id)
      .then(() => {
        if (topicId && !isNaN(+topicId)) {
          getComments(+topicId);
        }
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <li className={clsList} id={`${id}`}>
      {isLoading && <Loader position='absolute' />}
      <div className={cls.comment__author}>Author: {userName}</div>
      <br />
      <div className={cls.comment__content}>{content}</div>
      <div className={cls.comment__button}>
        {userData.id === authorId && (
          <Button
            typeButton='danger'
            sizeButton='small'
            onClick={handleDeleteComment}>
            Delete
          </Button>
        )}
      </div>
    </li>
  );
};

type ParamsUrl = {
  topicId: string;
};
