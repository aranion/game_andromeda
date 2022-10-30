import { createSlice } from '@reduxjs/toolkit/dist'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { InitialState } from './type'

const initialState: InitialState = {
  isAuth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth(state, { payload }: PayloadAction<boolean>) {
      state.isAuth = payload
    },
  },
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer
