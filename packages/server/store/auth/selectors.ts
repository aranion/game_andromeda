import type { RootState } from '../getInitialState';

export const allAuth = (state: RootState) => state.auth;

export const isAuth = (state: RootState) => allAuth(state).isAuth;
