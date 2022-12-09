import AppTest from './AppTest';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider as ReduxProvider } from 'react-redux';
import type { AnyAction, Store } from '@reduxjs/toolkit';
import type { RootState } from '../../server/store/getInitialState';

export const render = (
  store: Store<RootState, AnyAction>,
  location: string | Partial<Location>
) =>
  renderToString(
    <ReduxProvider store={store}>
      <StaticRouter location={location}>
        <AppTest />
      </StaticRouter>
    </ReduxProvider>
  );
