import { createSlice } from '@reduxjs/toolkit/dist';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Topic } from 'src/store/forum/type';
import type { InitialState } from './type';

const initialState: InitialState = {
  topics: [],
};

export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    setTopics(state, { payload }: PayloadAction<Topic[]>) {
      state.topics = payload;
    },
  },
});
