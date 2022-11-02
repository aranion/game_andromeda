import cls from './style.module.css';
import classnames from 'classnames';
import { Avatar } from '../Avatar';
import type { Leader } from '../../pages/LeaderBoard';

export function BoardTable(props: Props) {
  const { leaders } = props;

  return (
    <table className={cls.boardTable}>
      <tr className={cls.boardTable__tr}>
        <th className={cls.boardTable__th}>Avatar</th>
        <th className={cls.boardTable__th}>Position</th>
        <th className={cls.boardTable__th}>Nickname</th>
        <th className={cls.boardTable__th}>HighScore</th>
      </tr>
      {leaders.map((leader, i) => {
        const { highScore, nickname } = leader;
        const startPosition = 4;

        const clsAvatar = classnames(
          cls.boardTable__td,
          cls.boardTable__td_avatar
        );

        return (
          <tr key={i} className={cls.boardTable__tr}>
            <td className={clsAvatar}>
              <Avatar />
            </td>
            <td className={cls.boardTable__td}>{i + startPosition}</td>
            <td className={cls.boardTable__td}>{nickname}</td>
            <td className={cls.boardTable__td}>{highScore}</td>
          </tr>
        );
      })}
    </table>
  );
}

type Props = {
  leaders: Leader[];
};
