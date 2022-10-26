import App from './App';
import { Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

const appContent = 'Вот тут будет жить ваше приложение :)';

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
);

test('Example test', async () => {
  render(
    <Route>
      <App />
    </Route>
  );
  expect(screen.getByText(appContent)).toBeDefined();
});
