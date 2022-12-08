import AppTest from './AppTest';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider as ReduxProvider } from 'react-redux';

export const render = (store: any, location: any) =>
  renderToString(
    <ReduxProvider store={store}>
      <StaticRouter location={location}>
        <AppTest />
      </StaticRouter>
    </ReduxProvider>
  );
