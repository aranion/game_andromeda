import { configureStore } from '@reduxjs/toolkit';
import { gameActions, gameReducer } from './game';
import { soundActions, soundReducer } from './sound';
import { authActions, authApi, authReducer } from './auth';
import { userActions, userApi, userReducer } from './user';
import { forumActions, forumApi, forumReducer } from './forum';
import { resourcesApi } from './resources';
import {
  leaderBoardActions,
  leaderBoardApi,
  leaderBoardReducer,
} from './leaderBoard';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [resourcesApi.reducerPath]: resourcesApi.reducer,
    [leaderBoardApi.reducerPath]: leaderBoardApi.reducer,
    [forumApi.reducerPath]: forumApi.reducer,
    user: userReducer,
    auth: authReducer,
    game: gameReducer,
    sound: soundReducer,
    leaderBoard: leaderBoardReducer,
    forum: forumReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(userApi.middleware)
      .concat(authApi.middleware)
      .concat(resourcesApi.middleware)
      .concat(leaderBoardApi.middleware)
      .concat(forumApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export const allActions = {
  ...userActions,
  ...authActions,
  ...gameActions,
  ...soundActions,
  ...leaderBoardActions,
  ...forumActions,
};

export type RootState = ReturnType<typeof store.getState>;
