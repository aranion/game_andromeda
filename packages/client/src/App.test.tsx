import { render } from '@testing-library/react';
import Game from './pages/Game';
import { BrowserRouter } from 'react-router-dom';

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
);

test('Canvas initialization test', async () => {
  const { container } = render(
    <BrowserRouter>
      <Game />
    </BrowserRouter>
  );
  const canvas = container.querySelector('canvas');
  expect(canvas).toBeDefined();
});
