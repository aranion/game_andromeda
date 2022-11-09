import cls from './styles.module.css';
import { useEffect, useState } from 'react';
import { BoardTable, TitlePage, TopLeader } from 'src/components';
import { mockLeader } from 'src/constants/mockData';

export default function LeaderBoard() {
  const [topLeader, setTopLeader] = useState<Leader[]>([]);
  const [otherLeader, setOtherLeader] = useState<Leader[]>([]);

  useEffect(() => {
    setTopLeader(mockLeader.slice(0, 3));
    setOtherLeader(mockLeader.slice(3, 20));
  }, []);

  return (
    <>
      <TitlePage title='LeaderBoard' />
      <div className={cls.leaderBoard}>
        <div className={cls.leaderBoard__topLeader}>
          {topLeader.map((leader, i) => (
            <TopLeader key={i} position={i} leaderInfo={leader} />
          ))}
        </div>

        <BoardTable leaders={otherLeader} />
      </div>
    </>
  );
}

export type Leader = {
  userId: number;
  nickname: string;
  highScore: number;
};
