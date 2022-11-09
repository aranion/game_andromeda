import cls from './styles.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Avatar } from 'src/components';
import { mockAvatar } from 'src/constants/mockData';
import { RouterList } from 'src/router/routerList';
import type { Leader } from 'src/pages/LeaderBoard';

export function TopLeader(props: Props) {
  const { position, leaderInfo } = props;
  const { highScore, nickname, userId } = leaderInfo;

  const clsWrapper = classNames(cls.topLeader, {
    [cls.topLeader__first]: position === 0,
  });

  return (
    <div className={clsWrapper}>
      <Link to={`${RouterList.PROFILE}/${userId}`}>
        <div className={cls.topLeader__wrapper}>
          <div className={cls.topLeader__avatar}>
            <Avatar path={mockAvatar} />
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
