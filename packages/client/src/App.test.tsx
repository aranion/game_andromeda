import { render, screen } from '@testing-library/react';
import SignIn from './pages/SignIn';

const appContent = 'SignIn';

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
);

test('Example test', async () => {
  render(<SignIn />);
  expect(screen.getByText(appContent)).toBeDefined();
});
