import type { RootState } from 'src/store';

export const all = (state: RootState) => state.forum;

export const topics = (state: RootState) => all(state).topics;
