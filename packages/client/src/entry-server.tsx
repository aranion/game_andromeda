import App from './App';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import type { AnyAction, Store } from '@reduxjs/toolkit';
import type { RootState } from '../../server/store/getInitialState';

export const render = (
  store: Store<RootState, AnyAction>,
  location: string | Partial<Location>
) =>
  renderToString(
    <Provider store={store}>
      <StaticRouter location={location}>
        <App />
      </StaticRouter>
    </Provider>
  );
