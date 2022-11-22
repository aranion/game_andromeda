import { useActions } from './useActions';
import { useTypeSelector } from './useTypeSelector';
import { userSelectors } from 'src/store/user';
import {
  useLazyAddLeaderBoardQuery,
  useLazyFetchAllLeaderBoardQuery,
  useLazyFetchTeamLeaderBoardQuery,
} from 'src/store/leaderBoard/api';
import type {
  RequestAllLeaderBoard,
  RequestLeaderBoardTeamName,
} from 'src/store/leaderBoard/type';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import type { SerializedError } from '@reduxjs/toolkit';

export const useLeaderBoard = () => {
  const { userData } = useTypeSelector(userSelectors.all);
  const { display_name, login, id: userId, avatar } = userData;

  const { setLeaders, setHightScore } = useActions();

  const [fetchAllLeaderBoard, { isLoading: isLoadingAll }] =
    useLazyFetchAllLeaderBoardQuery();
  const [fetchAddLeaderBoard, { isLoading: isLoadingAddLeader }] =
    useLazyAddLeaderBoardQuery();
  const [fetchTeamLeaderBoard, { isLoading: isLoadingLeaders }] =
    useLazyFetchTeamLeaderBoardQuery();

  const error = (error?: FetchBaseQueryError | SerializedError) => {
    if (error) {
      if ('message' in error) {
        throw new Error(error.message);
      } else {
        console.error(error);
      }
    }
  };

  const addTeamLeader = (highScore: number) => {
    if (userId) {
      fetchAddLeaderBoard({
        data: { nickname: display_name || login, userId, highScore, avatar },
      })
        .then(res => {
          if ('data' in res) {
            setHightScore(null);
            console.log('Leader added', res.data);
          } else {
            error(res.error);
          }
        })
        .catch(console.error);
    }
  };

  const getAllLeaders = (params?: RequestAllLeaderBoard) => {
    fetchAllLeaderBoard(params || {})
      .then(res => {
        if (res.data) {
          setLeaders(res.data);
        } else {
          error(res.error);
        }
      })
      .catch(console.error);
  };

  const getTeamLeaders = (params?: RequestLeaderBoardTeamName) => {
    fetchTeamLeaderBoard(params || {})
      .then(res => {
        if (res.data) {
          setLeaders(res.data);
        } else {
          error(res.error);
        }
      })
      .catch(console.error);
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
