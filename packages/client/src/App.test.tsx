import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Game from './pages/Game';
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
      <Game />
    </Provider>
  );

  const canvas = container.querySelector('canvas');
  expect(canvas).toBeDefined();
});
