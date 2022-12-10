import './index.css';
import React from 'react';
import App from './App';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { configureStoreSSR } from '../../server/store';
import { hydrateRoot } from 'react-dom/client';
import { hot } from 'react-hot-loader/root';
import { ErrorBoundary } from './components';
import { BrowserRouter } from 'react-router-dom';
// // import { startServiceWorker } from './startServiceWorker';

const rootElement = document.getElementById('root');
export let __STORE__: any;

if (rootElement) {
  const HotWrapApp: React.FC<Props> = hot(props => <App {...props} />);

  if (window.__PRELOADED_STATE__) {
    const { store, history } = configureStoreSSR(window.__PRELOADED_STATE__);
    delete window.__PRELOADED_STATE__;

    (__STORE__ = store),
      hydrateRoot(
        rootElement,
        <React.StrictMode>
          <Provider store={__STORE__}>
            <BrowserRouter>
              <ConnectedRouter history={history}>
                <ErrorBoundary>
                  <HotWrapApp />
                </ErrorBoundary>
              </ConnectedRouter>
            </BrowserRouter>
          </Provider>
        </React.StrictMode>
      );
  } else {
    throw new Error('window.__PRELOADED_STATE__ not found');
  }
} else {
  throw new Error('HTML element with id = "root" not found');
}

// startServiceWorker();

type Props = Record<string, unknown>;
