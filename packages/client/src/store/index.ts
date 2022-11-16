import { authActions, authReducer } from './auth';
import { userActions, userReducer } from './user';
import { resourcesApi } from './resources';
import { userApi } from './user/api';
import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './auth/api';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [resourcesApi.reducerPath]: resourcesApi.reducer,
    user: userReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(userApi.middleware)
      .concat(authApi.middleware)
      .concat(resourcesApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export const allActions = {
  ...userActions,
  ...authActions,
};

export type RootState = ReturnType<typeof store.getState>;
