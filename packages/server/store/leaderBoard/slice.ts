import { createSlice } from '@reduxjs/toolkit/dist';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Leader } from '../leaderBoard/type';
import type { LeaderBoardInitialState } from './type';
import type { User } from '../user/type';

const leaderBoardInitialState: LeaderBoardInitialState = {
  leaders: [],
};

export const leaderBoardSlice = createSlice({
  name: 'leaderBoard',
  initialState: leaderBoardInitialState,
  reducers: {
    setLeaders(state, { payload }: PayloadAction<Leader[]>) {
      state.leaders = payload;
    },
    setLeaderUserData(state, { payload }: PayloadAction<User>) {
      state.leaders = state.leaders.map(leader => {
        const { id, avatar, display_name, login } = payload;

        if (id === leader.id) {
          const nickname = display_name || login;

          return { ...leader, avatar, nickname };
        }

        return leader;
      });
    },
  },
});
