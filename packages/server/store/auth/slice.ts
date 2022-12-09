import { createSlice } from '@reduxjs/toolkit/dist';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AuthInitialState } from './type';

export const authInitialState: AuthInitialState = {
  isAuth: false,
  isLoadingAuth: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setIsAuth(state, { payload }: PayloadAction<boolean>) {
      state.isAuth = payload;
    },
    setIsLoadingAuth(state, { payload }: PayloadAction<boolean>) {
      state.isLoadingAuth = payload;
    },
  },
});
