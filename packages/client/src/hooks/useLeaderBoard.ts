import { BASE_URL } from '../../../server/constants/vars';
import { useState } from 'react';
import { useActions } from './useActions';
import { useTypeSelector } from './useTypeSelector';
import { userSelectors } from '../../../server/store/user';
import {
  ConfigLeaderBoard,
  Leader,
} from '../../../server/store/leaderBoard/type';
import type { User } from '../../../server/store/user/type';

export const useLeaderBoard = () => {
  const URI_LEADERBOARD = `${BASE_URL}/leaderboard`;
  const DEFAULT_OPTIONS = {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  } as const;

  const [isLoadingAll, setIsLoadingAll] = useState(false);
  const [isLoadingLeaders, setIsLoadingLeaders] = useState(false);
  const [isLoadingAddLeader, setIsLoadingAddLeader] = useState(false);

  const { userData } = useTypeSelector(userSelectors.all);
  const { id } = userData;

  const { setLeaders, setHightScore, setLeaderUserData } = useActions();

  const addTeamLeader = (highScore: number) => {
    if (id) {
      setIsLoadingAddLeader(true);

      const body: RequestAddLeaderBoard = {
        data: { id, highScore },
        ratingFieldName: ConfigLeaderBoard.RATING_FIELD_NAME,
        teamName: ConfigLeaderBoard.TEAM_NAME,
      };

      fetch(`${URI_LEADERBOARD}`, {
        ...DEFAULT_OPTIONS,
        body: JSON.stringify(body),
      })
        .then<string>(res => res.text())
        .then(res => {
          if (res) {
            setHightScore(null);
            console.log('Leader added', res);
          }
        })
        .catch(console.error)
        .finally(() => {
          setIsLoadingAddLeader(false);
        });
    }
  };

  const getAllLeaders = (params?: RequestAllLeaderBoard) => {
    setIsLoadingAll(true);

    const body = {
      ratingFieldName:
        params?.ratingFieldName ?? ConfigLeaderBoard.RATING_FIELD_NAME,
      cursor: params?.cursor ?? 0,
      limit: params?.limit ?? 13,
    };

    fetch(`${URI_LEADERBOARD}/all`, {
      ...DEFAULT_OPTIONS,
      body: JSON.stringify(body),
    })
      .then<Leader[]>(res => res.json())
      .then(res => {
        if (res) {
          setLeaders(res);
        }
      })
      .catch(console.error)
      .finally(() => {
        setIsLoadingAll(false);
      });
  };

  const getTeamLeaders = (params?: RequestLeaderBoardTeamName) => {
    setIsLoadingLeaders(true);

    const body = {
      ratingFieldName:
        params?.ratingFieldName ?? ConfigLeaderBoard.RATING_FIELD_NAME,
      cursor: params?.cursor ?? 0,
      limit: params?.limit ?? 13,
    };
    const teamName = params?.teamName ?? ConfigLeaderBoard.TEAM_NAME;

    fetch(`${URI_LEADERBOARD}/${teamName}`, {
      ...DEFAULT_OPTIONS,
      body: JSON.stringify(body),
    })
      .then<ResponseLeaderBoard>(res => res.json())
      .then(res => {
        if (res) {
          const leaders = res.map(leader => leader.data);

          setLeaders(leaders);
          getLeaderUserData(leaders);
        }
      })
      .catch(console.error)
      .finally(() => {
        setIsLoadingLeaders(false);
      });
  };

  const getLeaderUserData = (leaders: Leader[]) => {
    leaders.forEach(leader => {
      const userId = leader.id?.toString();

      if (userId) {
        fetch(`${BASE_URL}/user/${userId}`, {
          credentials: 'include',
        })
          .then<User>(res => res.json())
          .then(res => {
            if (res) {
              setLeaderUserData(res);
            }
          })
          .catch(console.error);
      }
    });
  };

  return {
    addTeamLeader,
    getAllLeaders,
    getTeamLeaders,
    isLoadingLeaders,
    isLoadingAll,
    isLoadingAddLeader,
  };
};

type LeaderBoardData = { data: Leader };

type RequestAllLeaderBoard = Partial<{
  ratingFieldName: ConfigLeaderBoard.RATING_FIELD_NAME;
  cursor: number;
  limit: number;
}>;

type RequestLeaderBoardTeamName = Partial<
  {
    teamName: ConfigLeaderBoard.TEAM_NAME;
  } & RequestAllLeaderBoard
>;

type RequestAddLeaderBoard = LeaderBoardData &
  Omit<RequestLeaderBoardTeamName, 'cursor' | 'limit'>;

type ResponseLeaderBoard = LeaderBoardData[];
