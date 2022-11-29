import { gameSlice } from './slice';

export * as gameSelectors from './selectors';

export const gameActions = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
