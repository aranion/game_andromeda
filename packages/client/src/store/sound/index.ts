import { soundSlice } from './slice';

export * as soundSelectors from './selectors';

export const soundActions = soundSlice.actions;
export const soundReducer = soundSlice.reducer;
