import cls from './styles.module.css';
import { Avatar, Loader } from 'src/components';
import { useNavigate } from 'react-router-dom';
import { RouterList } from 'src/router/routerList';
import type { Leader } from '../../../../server/store/leaderBoard/type';

const HEADERS_COLUMNS = ['Position', 'Avatar', 'Nickname', 'HighScore'];

export function BoardTable(props: Props) {
  const { leaders, isLoading = false } = props;
  const isEmptyData = leaders.length === 0;

  const navigate = useNavigate();

  return (
    <div className={cls.boardTable}>
      {isLoading && <Loader />}

      <table className={cls.boardTable__table}>
        <thead className={cls.boardTable__table_tr}>
          <tr>
            {HEADERS_COLUMNS.map((title, i) => (
              <th key={i} className={cls.boardTable__table_th}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isEmptyData && (
            <tr>
              <td
                className={cls.boardTable__table_empty}
                colSpan={HEADERS_COLUMNS.length}>
                No leaders.
              </td>
            </tr>
          )}

          {leaders.map((leader, i) => {
            const { highScore, nickname, id, avatar } = leader;
            const startPosition = 4;
            const position = i + startPosition;

            const handleNavigate = () => {
              navigate(`${RouterList.PROFILE}/${id}`);
            };

            return (
              <tr
                key={i}
                className={cls.boardTable__table_tr}
                onClick={handleNavigate}>
                <td className={cls.boardTable__table_td}>{position}</td>
                <td className={cls.boardTable__table_td}>
                  <div className={cls.boardTable__table_avatar}>
                    <Avatar path={avatar} />
                  </div>
                </td>
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
  isLoading?: boolean;
};
