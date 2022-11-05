import cls from './style.module.css';
import classnames from 'classnames';
import { Avatar } from '../Avatar';
import { useNavigate } from 'react-router-dom';
import { RouterList } from '../../router/routerList';
import type { Leader } from '../../pages/LeaderBoard';

const headersColumns = ['Avatar', 'Position', 'Nickname', 'HighScore'];

export function BoardTable(props: Props) {
  const { leaders } = props;

  const navigate = useNavigate();

  return (
    <div className={cls.boardTable}>
      <table className={cls.boardTable__table}>
        <thead className={cls.boardTable__table_tr}>
          <tr>
            {headersColumns.map((title, i) => (
              <th key={i} className={cls.boardTable__table_th}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {leaders.map((leader, i) => {
            const { highScore, nickname, userId } = leader;
            const startPosition = 4;
            const position = i + startPosition;

            const clsAvatar = classnames(
              cls.boardTable__table_td,
              cls.boardTable__table_avatar
            );

            const handleNavigate = () => {
              navigate(`${RouterList.PROFILE}/${userId}`);
            };

            return (
              <tr
                key={i}
                className={cls.boardTable__table_tr}
                onClick={handleNavigate}>
                <td className={clsAvatar}>
                  <Avatar />
                </td>
                <td className={cls.boardTable__table_td}>{position}</td>
                <td className={cls.boardTable__table_td}>{nickname}</td>
                <td className={cls.boardTable__table_td}>{highScore}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

type Props = {
  leaders: Leader[];
};
