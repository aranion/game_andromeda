import { authSlice } from './slice';

export * as authSelectors from './selectors';

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
