import { createSlice } from '@reduxjs/toolkit/dist';
import type { GameInitialState } from './type';
import type { PayloadAction } from '@reduxjs/toolkit';

export const gameInitialState: GameInitialState = {
  hightScore: null,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState: gameInitialState,
  reducers: {
    setHightScore(state, { payload }: PayloadAction<number | null>) {
      state.hightScore = payload;
    },
  },
});
