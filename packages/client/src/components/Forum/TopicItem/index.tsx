import { useNavigate } from 'react-router-dom';
import { RouterList } from 'src/router/routerList';
import { useEffect, useState } from 'react';
import classnames from 'classnames';
import type { Topic } from 'src/store/forum/type';
import cls from './styles.module.css';
import { useLazyFetchTopicCommentsCountQuery } from 'src/store/forum';

export function TopicItem(props: Props) {
  const { id, title } = props;
  const classNames = classnames(cls.item, cls.item__link);

  const [count, setCount] = useState(0);

  const [fetchCommentsCount] = useLazyFetchTopicCommentsCountQuery();

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`${RouterList.FORUM}/${id}`);
  };

  useEffect(() => {
    fetchCommentsCount(id)
      .then(res => {
        if (res?.data) {
          setCount(res?.data);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <tr onClick={handleNavigate}>
      <td className={classNames}>{title}</td>
      <td className={cls.item}>{count}</td>
    </tr>
  );
}

type Props = Topic;
