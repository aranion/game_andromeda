import { createSlice } from '@reduxjs/toolkit/dist';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TopicProps } from 'src/store/forum/type';
import type { InitialState } from './type';

const initialState: InitialState = {
  topics: [],
};

export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    setTopics(state, { payload }: PayloadAction<TopicProps[]>) {
      state.topics = payload;
    },
  },
});
