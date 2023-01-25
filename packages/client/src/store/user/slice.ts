import { createSlice } from '@reduxjs/toolkit/dist';
import type { InitialState, User } from './type';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialState = {
  userData: {
    avatar: null,
    display_name: null,
    email: '',
    first_name: '',
    id: null,
    login: '',
    phone: '',
    second_name: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<Partial<User>>) {
      state.userData = { ...state.userData, ...action!.payload };
    },
    resetUserState: () => initialState,
  },
});
