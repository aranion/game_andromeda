import { routerMiddleware, RouterState } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './store/auth';
import { connectRouter } from 'connected-react-router';

export function configureStoreSSR(
  initialState: any,
  { url = '/', router = false }: any
) {
  //@ts-ignore
  const isServer = !(typeof window !== 'undefined' && window.document);

  const history: any = isServer
    ? createMemoryHistory({ initialEntries: router?.initialEntries || [url] })
    : createBrowserHistory();

  const store = configureStore({
    reducer: {
      auth: authReducer,
      router: connectRouter<RouterState<unknown>>(history),
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
