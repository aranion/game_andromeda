import { RootState } from './../index';

export const allAuth = (state: RootState) => state.auth;

export const isAuth = (state: RootState) => allAuth(state).isAuth;
