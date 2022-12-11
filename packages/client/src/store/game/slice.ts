import { createSlice } from '@reduxjs/toolkit/dist';
import type { InitialState } from './type';
import type { PayloadAction } from '@reduxjs/toolkit';
import { GameStatusList } from './type';

const initialState: InitialState = {
  hightScore: null,
  gameStatus: GameStatusList.running,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setHightScore(state, { payload }: PayloadAction<number | null>) {
      state.hightScore = payload;
    },
    setGameStatus(
      state,
      { payload }: PayloadAction<InitialState['gameStatus']>
    ) {
      state.gameStatus = payload;
    },
  },
});
