import type { RootState } from 'src/store';

export const all = (state: RootState) => state.leaderBoard;

export const leaders = (state: RootState) => all(state).leaders;
