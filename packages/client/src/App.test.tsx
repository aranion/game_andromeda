import { render, screen } from '@testing-library/react';
import NotFound from './pages/NotFound';

const appContent = 'Вот тут будет жить ваше приложение :)';

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
);

test('Example test', async () => {
  render(<NotFound />);
  expect(screen.getByText(appContent)).toBeDefined();
});
