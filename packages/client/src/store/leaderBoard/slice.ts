import { createSlice } from '@reduxjs/toolkit/dist';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Leader } from 'src/store/leaderBoard/type';
import type { InitialState } from './type';

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
  },
});

export const leaderBoardActions = leaderBoardSlice.actions;
export const leaderBoardReducer = leaderBoardSlice.reducer;
