import type { ThemeList } from 'src/hooks/useDarkTheme';

export type InitialState = {
  topics: Topic[];
};

export type Topic = {
  authorId: number;
  content: number;
  createdAt: string;
  id: number;
  title: string;
  updatedAt: string;
};

export type Comment = {
  authorId: number;
  content: string;
  createdAt: string;
  id: number;
  topicId: number;
  updatedAt: string;
};

export type ResponseComment = Comment;
export type ResponseTopic = Topic;
export type ResponseMessage = { message: string };
export type ResponseUpdateTopicById = unknown;
export type ResponseFetchTopicById = Topic;
export type ResponseDeleteTopicById = unknown;
export type ResponseCreateComment = unknown;
export type ResponseUpdateComment = unknown;
export type ResponseDeleteTopics = string;
export type ResponseAllComments = Comment[];

export type RequestAddNewTopic = {
  title: string;
  content: string;
};
export type RequestTopic = RequestAddNewTopic & {
  authorId: number;
};
export type RequestCreateComment = {
  topicId: number;
  body: Pick<Comment, 'authorId' | 'content'>;
};
export type RequestUpdateComment = {
  topicId: number;
  body: Pick<Comment, 'id' | 'content'>;
};
export type RequestCreateStyleTheme = {
  themeName: ThemeList;
  ownerId: number;
};
