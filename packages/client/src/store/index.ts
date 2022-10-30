import { authActions, authReducer } from './auth/slice';
import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './auth/api';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export const allActions = {
  ...authActions,
};

export type RootState = ReturnType<typeof store.getState>;
