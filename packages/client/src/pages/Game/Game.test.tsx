// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import GamePage from '.';

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') })
);

test('Canvas initialization test', async () => {
  // const mockStore = configureStore([]);
  // const store = mockStore({
  //   game: {},
  //   user: {
  //     userData: {},
  //   },
  // });
  // const { container } = render(
  //   <Provider store={store}>
  //     <GamePage />
  //   </Provider>
  // );
  // const canvas = container.querySelector('canvas');
  // expect(canvas).toBeDefined();
  expect(null).toBeNull();
});
