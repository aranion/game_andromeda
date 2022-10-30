import { createSlice } from '@reduxjs/toolkit/dist';
import type { InitialState } from './type';

const initialState: InitialState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
