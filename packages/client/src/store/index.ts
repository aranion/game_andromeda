import { configureStore } from '@reduxjs/toolkit';
import { gameActions, gameReducer } from './game';
import { soundActions, soundReducer } from './sound';
import { authActions, authApi, authReducer } from './auth';
import { userActions, userApi, userReducer } from './user';
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
    user: userReducer,
    auth: authReducer,
    game: gameReducer,
    sound: soundReducer,
    leaderBoard: leaderBoardReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(userApi.middleware)
      .concat(authApi.middleware)
      .concat(resourcesApi.middleware)
      .concat(leaderBoardApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export const allActions = {
  ...userActions,
  ...authActions,
  ...gameActions,
  ...soundActions,
  ...leaderBoardActions,
};

export type RootState = ReturnType<typeof store.getState>;
