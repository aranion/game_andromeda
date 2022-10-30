import { authActions, authReducer } from './auth/slice';
import { userActions, userReducer } from './user/slice';
import { userApi } from './user/api';
import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './auth/api';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    user: userReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(authApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export const allActions = {
  ...userActions,
  ...authActions,
};

export type RootState = ReturnType<typeof store.getState>;
