import { compose, applyMiddleware, legacy_createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { createRootReducer } from './';

//@ts-ignore
export const isServer = !(typeof window !== 'undefined' && window.document);

function getComposeEnhancers() {
  if (process.env.NODE_ENV !== 'production' && !isServer) {
    //@ts-ignore
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  return compose;
}

export function configureStore(
  initialState: any,
  { url = '/', router = false }: any
) {
  const history = isServer
    ? createMemoryHistory({ initialEntries: router?.initialEntries || [url] })
    : createBrowserHistory();

  const composeEnhancers = getComposeEnhancers();
  const middlewares = [routerMiddleware(history)];

  const store = legacy_createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  ) as any;

  return { store, history };
}
