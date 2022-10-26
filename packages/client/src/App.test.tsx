import App from './App';
import { Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

const appContent = 'Вот тут будет жить ваше приложение :)';

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
);

test('Example test', async () => {
  render(
    <Routes>
      <Route>
        <App />
      </Route>
    </Routes>
  );
  expect(screen.getByText(appContent)).toBeDefined();
});
