import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AudioContext } from 'standardized-audio-context-mock';
global.AudioContext = AudioContext as any;
import Game from './pages/Game';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
);

test('Canvas initialization test', async () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    game: {},
    user: {
      userData: {},
    },
  });

  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Game />
      </BrowserRouter>
    </Provider>
  );

  const canvas = container.querySelector('canvas');
  expect(canvas).toBeDefined();
});
