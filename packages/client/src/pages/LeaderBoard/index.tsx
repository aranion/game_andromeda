import { BoardTable, TopLeader } from '../../components';
import cls from './style.module.css';

const mockLeader: Leader[] = [
  { nickname: 'Player 1', highScore: 223112123 },
  { nickname: 'Player 2', highScore: 22311231 },
  { nickname: 'Player 3', highScore: 2231123 },
  { nickname: 'Player 4', highScore: 2231231 },
  { nickname: 'Player 5', highScore: 223112 },
  { nickname: 'Player 6', highScore: 2231 },
  { nickname: 'Player 7', highScore: 231 },
  { nickname: 'Player 8', highScore: 231 },
  { nickname: 'Player 9', highScore: 21 },
  { nickname: 'Player 9', highScore: 21 },
  { nickname: 'Player 9', highScore: 21 },
  { nickname: 'Player 9', highScore: 21 },
  { nickname: 'Player 9', highScore: 21 },
  { nickname: 'Player 9', highScore: 21 },
  { nickname: 'Player 9', highScore: 21 },
  { nickname: 'Player 9', highScore: 21 },
];

export default function LeaderBoard() {
  const topLeader = mockLeader.slice(0, 3);
  const otherLeader = mockLeader.slice(3, 20);

  return (
    <div>
      <h1 className={cls.leaderBoard__title}>LeaderBoard</h1>
      <div className={cls.leaderBoard}>
        <div className={cls.leaderBoard__top}>
          {topLeader.map((leader, i) => (
            <TopLeader position={i} leaderInfo={leader} />
          ))}
        </div>
        <div className={cls.leaderBoard__board}>
          <BoardTable leaders={otherLeader} />
        </div>
      </div>
    </div>
  );
}

export type Leader = {
  nickname: string;
  highScore: number;
};
