import { createSlice } from '@reduxjs/toolkit/dist';
import type { UserInitialState, User } from './type';
import type { PayloadAction } from '@reduxjs/toolkit';

export const userInitialState: UserInitialState = {
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
  initialState: userInitialState,
  reducers: {
    setUserData(state, action: PayloadAction<Partial<User>>) {
      state.userData = { ...state.userData, ...action.payload };
    },
    resetUserState: () => userInitialState,
  },
});
