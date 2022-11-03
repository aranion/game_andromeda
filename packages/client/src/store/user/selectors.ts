import type { RootState } from '..';

export const allUser = (state: RootState) => state.user;

export const userData = (state: RootState) => allUser(state).userData;
