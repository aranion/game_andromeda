import { routerMiddleware } from 'connected-react-router';
import {
  createBrowserHistory,
  createMemoryHistory,
  MemoryHistoryBuildOptions,
} from 'history';
import { AnyAction, configureStore } from '@reduxjs/toolkit';
import { authActions, authReducer } from './auth';
import { userActions, userReducer } from './user';
import { gameActions, gameReducer } from './game';
import { leaderBoardActions, leaderBoardReducer } from './leaderBoard';
import { connectRouter, routerActions } from 'connected-react-router';
import { isServer } from '../utils/isServer';
import type { RootState } from './getInitialState';
import type { Reducer } from 'react';

export function configureStoreSSR(initialState: RootState, options?: Options) {
  const { url = '/', router } = options || { url: '/' };

  const history = isServer
    ? createMemoryHistory({ initialEntries: router?.initialEntries || [url] })
    : createBrowserHistory();

  const store = configureStore({
    reducer: {
      auth: authReducer,
      user: userReducer,
      game: gameReducer,
      leaderBoard: leaderBoardReducer,
      router: connectRouter(history) as Reducer<unknown, AnyAction>,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(routerMiddleware(history)),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState,
  });

  return { store, history };
}

type Options = {
  url?: string;
  router?: MemoryHistoryBuildOptions;
};

export const allActions = {
  ...authActions,
  ...userActions,
  ...gameActions,
  ...leaderBoardActions,
  ...routerActions,
};
