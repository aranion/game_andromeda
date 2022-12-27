import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { ErrorBoundary } from './components';
import { startServiceWorker } from './startServiceWorker';
import { cursor } from './cursor';
import cursorImg from './assets/imgs/cursor.png';
import cursorPointerImg from './assets/imgs/cursorPointer.png';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
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
cursor.init(cursorImg, cursorPointerImg);
