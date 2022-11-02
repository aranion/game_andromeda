import cls from './style.module.css';
import classNames from 'classnames';
import { Avatar, Rating } from '../';
import { Link } from 'react-router-dom';
import { RouterList } from '../../router/routerList';
import type { Leader } from '../../pages/LeaderBoard';

export function TopLeader(props: Props) {
  const { position, leaderInfo } = props;
  const { highScore, nickname } = leaderInfo;
  const maxValueLeader = 3;
  const stars = maxValueLeader - position;
  return (
    <div
      className={classNames(cls.topLeader, {
        [cls.topLeader__first]: position === 0,
      })}>
      <Link to={RouterList.PROFILE}>
        <span className={cls.topLeader__nickname}>{nickname}</span>
        <div className={cls.topLeader__avatar}>
          <Avatar />
        </div>
        <div className={cls.rating}>
          <Rating showStars={stars} />
        </div>
        <span className={cls.topLeader__highScore}>
          {highScore.toLocaleString()}
        </span>
      </Link>
    </div>
  );
}

type Props = {
  position: number;
  leaderInfo: Leader;
};
