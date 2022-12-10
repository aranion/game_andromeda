import type { RootState } from '../getInitialState';

export const all = (state: RootState) => state.router;

export const location = (state: RootState) => all(state).location;
