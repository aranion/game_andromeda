import { createSlice } from '@reduxjs/toolkit/dist';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TopicProps } from 'src/store/forum/type';
import type { InitialState } from './type';
import type { User } from 'src/store/user/type';

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
    setTopicUserData(state, { payload }: PayloadAction<User>) {
      state.topics = state.topics.map(topic => {
        const { id, display_name, login } = payload;

        if (id === topic.authorId) {
          const author = display_name || login;
          return { ...topic, author };
        }

        return topic;
      });
    },
  },
});
