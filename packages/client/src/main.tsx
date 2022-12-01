import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { ErrorBoundary } from './components';
import { startServiceWorker } from './startServiceWorker';
import { hydrateRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

if (rootElement) {
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  throw new Error('HTML element with id = "root" not found');
}

startServiceWorker();
