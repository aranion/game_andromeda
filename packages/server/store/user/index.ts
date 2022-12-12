import { userSlice } from './slice';

export * as userSelectors from './selectors';

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
