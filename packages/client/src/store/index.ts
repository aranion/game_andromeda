import { configureStore } from '@reduxjs/toolkit';
import { authActions, authApi, authReducer } from './auth';
import { userActions, userApi, userReducer } from './user';
import {
  leaderBoardActions,
  leaderBoardApi,
  leaderBoardReducer,
} from './leaderBoard';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [leaderBoardApi.reducerPath]: leaderBoardApi.reducer,
    user: userReducer,
    auth: authReducer,
    leaderBoard: leaderBoardReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(authApi.middleware)
      .concat(leaderBoardApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export const allActions = {
  ...userActions,
  ...authActions,
  ...leaderBoardActions,
};

export type RootState = ReturnType<typeof store.getState>;
