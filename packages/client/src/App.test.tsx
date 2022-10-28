import { render } from '@testing-library/react';
import Game from './pages/Game';

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
);

test('Example test', async () => {
  const { container } = render(<Game />);
  const canvas = container.querySelector('canvas');
  expect(canvas).toBeDefined();
});
