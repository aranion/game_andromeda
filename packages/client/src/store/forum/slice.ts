import { createSlice } from '@reduxjs/toolkit/dist';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Topic } from 'src/store/forum/type';
import type { InitialState, Comments, CommentsCount } from './type';

const initialState: InitialState = {
  topics: [],
  activeTopicComments: {
    topicId: undefined,
    comments: [],
  },
};

export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    setTopics(state, { payload }: PayloadAction<Topic[]>) {
      state.topics = payload;
    },
    setTopicComments(state, { payload }: PayloadAction<Comments>) {
      state.activeTopicComments = payload;
    },
    setTopicCommentsCount(state, { payload }: PayloadAction<CommentsCount>) {
      state.topics = state.topics.map(topic => {
        const { topicId, commentCount } = payload;

        if (topicId === topic.id) {
          return { ...topic, commentCount };
        }

        return topic;
      });
    },
  },
});
