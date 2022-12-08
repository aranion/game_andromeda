import './index.css';
import React from 'react';
import AppTest from './AppTest';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { configureStore } from '../../server/store/configureStore';
import { hydrateRoot } from 'react-dom/client';
import { hot } from 'react-hot-loader/root';
import { ErrorBoundary } from './components';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// // import { startServiceWorker } from './startServiceWorker';

//       <Provider store={store}>
//         <BrowserRouter>
//           <ErrorBoundary>
//             <App />
//           </ErrorBoundary>
//         </BrowserRouter>
//       </Provider>

const rootElement = document.getElementById('root');

if (rootElement) {
  const HotWrapApp: React.FC<Props> = hot(props => <AppTest {...props} />);

  const { store, history } = configureStore(window.__PRELOADED_STATE__, {});
  delete window.__PRELOADED_STATE__;

  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ErrorBoundary>
            <HotWrapApp />
          </ErrorBoundary>
        </ConnectedRouter>
      </Provider>
    </React.StrictMode>
  );
} else {
  throw new Error('HTML element with id = "root" not found');
}

// startServiceWorker();

type Props = Record<string, unknown>;
