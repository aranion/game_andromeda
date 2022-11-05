import cls from './style.module.css';
import classNames from 'classnames';
import { Avatar } from '../';
import { Link } from 'react-router-dom';
import { RouterList } from '../../router/routerList';
import type { Leader } from '../../pages/LeaderBoard';

export function TopLeader(props: Props) {
  const { position, leaderInfo } = props;
  const { highScore, nickname, userId } = leaderInfo;

  return (
    <div
      className={classNames(cls.topLeader, {
        [cls.topLeader__first]: position === 0,
      })}>
      <Link to={`${RouterList.PROFILE}/${userId}`}>
        <div className={cls.topLeader__wrapper}>
          <div className={cls.topLeader__avatar}>
            <Avatar />
          </div>
          <div className={cls.topLeader__content}>
            <span className={cls.topLeader__content_nickname}>{nickname}</span>
            <span className={cls.topLeader__content_highScore}>
              {highScore.toLocaleString()}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

type Props = {
  position: number;
  leaderInfo: Leader;
};
