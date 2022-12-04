import './index.css';
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { ErrorBoundary } from './components';
import { startServiceWorker } from './startServiceWorker';
import { hydrateRoot } from 'react-dom/client';
import { hot } from 'react-hot-loader/root';

const rootElement = document.getElementById('root');

const HotWrapApp: React.FC<Props> = hot(props => <App {...props} />);

if (rootElement) {
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <ErrorBoundary>
            <HotWrapApp />
          </ErrorBoundary>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  throw new Error('HTML element with id = "root" not found');
}

startServiceWorker();

type Props = Record<string, unknown>;
