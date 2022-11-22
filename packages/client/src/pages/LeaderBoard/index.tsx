import cls from './styles.module.css';
import { useEffect, useState } from 'react';
import { BoardTable, TitlePage, TopLeader, ButtonBack } from 'src/components';
import { useTypeSelector } from 'src/hooks/useTypeSelector';
import { leaderBoardSelectors } from 'src/store/leaderBoard';
import { useLeaderBoard } from 'src/hooks/useLeaderBoard';
import type { Leader } from 'src/store/leaderBoard/type';

export default function LeaderBoard() {
  const [topLeader, setTopLeader] = useState<Leader[]>([]);
  const [otherLeader, setOtherLeader] = useState<Leader[]>([]);

  const leaders = useTypeSelector(leaderBoardSelectors.leaders);

  const { getTeamLeaders, isLoadingLeaders } = useLeaderBoard();

  useEffect(() => {
    getTeamLeaders();
  }, []);

  useEffect(() => {
    if (leaders.length) {
      setTopLeader(leaders.slice(0, 3));
      setOtherLeader(leaders.slice(3, 20));
    }
  }, [leaders]);

  return (
    <>
      <TitlePage>LeaderBoard</TitlePage>
      <div className={cls.leaderBoard}>
        <div className={cls.leaderBoard__topLeader}>
          {topLeader.map((leader, i) => (
            <TopLeader key={i} position={i} leader={leader} />
          ))}
        </div>

        <BoardTable leaders={otherLeader} isLoading={isLoadingLeaders} />
        <ButtonBack />
      </div>
    </>
  );
}
