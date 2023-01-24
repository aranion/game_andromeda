import { useNavigate } from 'react-router-dom';
import { RouterList } from 'src/router/routerList';
import classnames from 'classnames';
import type { Topic as Props } from 'src/store/forum/type';
import cls from './styles.module.css';

export function TopicItem(props: Props) {
  const { id, title, commentCount } = props;
  const classNames = classnames(cls.item, cls.item__link);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`${RouterList.FORUM}/${id}`);
  };

  return (
    <tr onClick={handleNavigate}>
      <td className={classNames}>{title}</td>
      <td className={cls.item}>{commentCount}</td>
    </tr>
  );
}
