import { leaderBoardSlice } from './slice';

export * as leaderBoardSelectors from './selectors';

export const leaderBoardActions = leaderBoardSlice.actions;
export const leaderBoardReducer = leaderBoardSlice.reducer;
