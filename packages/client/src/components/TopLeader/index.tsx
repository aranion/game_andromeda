import cls from './styles.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Avatar } from 'src/components';
import { RouterList } from 'src/router/routerList';
import type { Leader } from '../../../../server/store/leaderBoard/type';

export function TopLeader(props: Props) {
  const { position, leader } = props;
  const { highScore, nickname, id, avatar } = leader;

  const clsWrapper = classNames(cls.topLeader, {
    [cls.topLeader__first]: position === 0,
  });

  return (
    <div className={clsWrapper}>
      <Link to={`${RouterList.PROFILE}/${id}`}>
        <div className={cls.topLeader__wrapper}>
          <div className={cls.topLeader__avatar}>
            <Avatar path={avatar} />
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
  leader: Leader;
};
