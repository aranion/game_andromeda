import { createSlice } from '@reduxjs/toolkit/dist'
import type { InitialState, User } from './type'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: InitialState = {
  userData: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<User>) {
      state.userData = action.payload
    },
    setUserId(state, action: PayloadAction<number>) {
      if (state.userData) {
        state.userData.id = action.payload
      }
    },
    resetUserState: () => initialState,
  },
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
