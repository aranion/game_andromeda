import { createSlice } from '@reduxjs/toolkit/dist';
import type { InitialState } from './type';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialState = {
  hightScore: null,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setHightScore(state, { payload }: PayloadAction<number | null>) {
      state.hightScore = payload;
    },
  },
});
