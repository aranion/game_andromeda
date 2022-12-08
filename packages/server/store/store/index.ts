import { configureStore } from '@reduxjs/toolkit';
// import { gameReducer } from './game';
import { authReducer } from './auth'; // authApi,
// import { userApi, userReducer } from './user';
// import { resourcesApi } from './resources';
// import { leaderBoardApi, leaderBoardReducer } from './leaderBoard';

const store = configureStore({
  reducer: {
    // [userApi.reducerPath]: userApi.reducer,
    // [authApi.reducerPath]: authApi.reducer,
    // [resourcesApi.reducerPath]: resourcesApi.reducer,
    // [leaderBoardApi.reducerPath]: leaderBoardApi.reducer,
    // user: userReducer,
    auth: authReducer,
    // game: gameReducer,
    // leaderBoard: leaderBoardReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // .concat(userApi.middleware)
  // .concat(authApi.middleware)
  // .concat(resourcesApi.middleware)
  // .concat(leaderBoardApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
