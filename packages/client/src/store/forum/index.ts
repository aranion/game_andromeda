import { forumSlice } from './slice';

export * as forumSelectors from './selectors';

export * from './api';

export const forumActions = forumSlice.actions;
export const forumReducer = forumSlice.reducer;
