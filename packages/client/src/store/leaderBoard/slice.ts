import { createSlice } from '@reduxjs/toolkit/dist';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Leader } from 'src/store/leaderBoard/type';
import type { InitialState } from './type';
import type { User } from 'src/store/user/type';

const initialState: InitialState = {
  leaders: [],
};

export const leaderBoardSlice = createSlice({
  name: 'leaderBoard',
  initialState,
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
