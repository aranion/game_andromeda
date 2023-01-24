import type { RootState } from 'src/store';

export const all = (state: RootState) => state.forum;

export const topics = (state: RootState) => all(state).topics;

export const activeTopicComments = (state: RootState) =>
  all(state).activeTopicComments;
export const activeTopicId = (state: RootState) =>
  activeTopicComments(state).topicId;
export const activeComments = (state: RootState) =>
  activeTopicComments(state).comments;
