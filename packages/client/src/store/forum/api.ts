import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_SERVER } from 'src/constants/vars';
import type { ThemeList } from 'src/hooks/useDarkTheme';
import type {
  ResponseDeleteTopics,
  ResponseAllComments,
  RequestTopic,
  ResponseTopic,
  ResponseMessage,
  ResponseUpdateTopicById,
  ResponseFetchTopicById,
  ResponseDeleteTopicById,
  ResponseCreateComment,
  RequestCreateComment,
  ResponseUpdateComment,
  RequestUpdateComment,
  RequestCreateStyleTheme,
  ResponseComment,
} from './type';

const DEFAULT_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
} as const;

export const forumApi = createApi({
  reducerPath: 'forum/api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL_SERVER}/forum`,
  }),
  endpoints: build => ({
    fetchAllTopics: build.query<ResponseTopic[], unknown>({
      query: () => ({
        method: 'GET',
        url: '/',
      }),
    }),
    addTopic: build.query<ResponseTopic, RequestTopic>({
      query: body => ({
        ...DEFAULT_OPTIONS,
        url: '/',
        body: JSON.stringify(body),
        method: 'POST',
      }),
    }),
    deleteAllTopics: build.query<ResponseDeleteTopics, unknown>({
      query: () => ({
        url: '/',
        method: 'DELETE',
      }),
    }),

    updateTopicById: build.query<ResponseUpdateTopicById, number>({
      query: topicId => ({
        ...DEFAULT_OPTIONS,
        method: 'PUT',
        url: `/topic/${topicId}`,
      }),
    }),
    fetchTopicById: build.query<ResponseFetchTopicById, number>({
      query: topicId => ({
        method: 'GET',
        url: `/topic/${topicId}`,
      }),
    }),
    deleteTopicById: build.query<ResponseDeleteTopicById, number>({
      query: topicId => ({
        method: 'DELETE',
        url: `/topic/${topicId}`,
      }),
    }),

    fetchCommentById: build.query<ResponseComment, number>({
      query: topicId => ({
        method: 'GET',
        url: `/comment/${topicId}`,
      }),
    }),
    deleteCommentById: build.query<ResponseComment, number>({
      query: commentId => ({
        method: 'DELETE',
        url: `/comment/${commentId}`,
      }),
    }),
    createCommentById: build.query<ResponseCreateComment, RequestCreateComment>(
      {
        query: ({ topicId, body }) => ({
          ...DEFAULT_OPTIONS,
          method: 'POST',
          body: JSON.stringify(body),
          url: `/comment/${topicId}`,
        }),
      }
    ),
    updateCommentById: build.query<ResponseUpdateComment, RequestUpdateComment>(
      {
        query: ({ topicId, body }) => ({
          ...DEFAULT_OPTIONS,
          method: 'PUT',
          body: JSON.stringify(body),
          url: `/comment/${topicId}`,
        }),
      }
    ),

    fetchTopicAllComments: build.query<ResponseAllComments, number>({
      query: topicId => ({
        method: 'GET',
        url: `/comments/${topicId}`,
      }),
    }),
    fetchTopicCommentsCount: build.query<{ count: number }, number>({
      query: topicId => ({
        method: 'GET',
        url: `/comments-count/${topicId}`,
      }),
    }),
    deleteCommentsById: build.query<ResponseMessage, number>({
      query: topicId => ({
        method: 'DELETE',
        url: `/comments/${topicId}`,
      }),
    }),

    fetchStyleTheme: build.query<ThemeList, number>({
      query: userId => ({
        method: 'GET',
        url: `/style-theme/${userId}`,
      }),
    }),
    deleteStyleTheme: build.query<ResponseMessage, number>({
      query: userId => ({
        method: 'DELETE',
        url: `/style-theme/${userId}`,
      }),
    }),
    createStyleTheme: build.query<string, RequestCreateStyleTheme>({
      query: body => ({
        ...DEFAULT_OPTIONS,
        method: 'POST',
        url: '/style-theme',
        body: JSON.stringify(body),
      }),
    }),
    updateStyleTheme: build.query<string, RequestCreateStyleTheme>({
      query: body => ({
        ...DEFAULT_OPTIONS,
        method: 'PUT',
        url: '/style-theme',
        body: JSON.stringify(body),
      }),
    }),
  }),
});

export const {
  useLazyFetchAllTopicsQuery,
  useLazyFetchTopicAllCommentsQuery,
  useLazyFetchTopicCommentsCountQuery,
  useLazyAddTopicQuery,
  useLazyCreateCommentByIdQuery,
  useLazyDeleteAllTopicsQuery,
  useLazyDeleteCommentByIdQuery,
  useLazyDeleteCommentsByIdQuery,
  useLazyDeleteTopicByIdQuery,
  useLazyFetchCommentByIdQuery,
  useLazyFetchTopicByIdQuery,
  useLazyUpdateCommentByIdQuery,
  useLazyUpdateTopicByIdQuery,
  useLazyCreateStyleThemeQuery,
  useLazyDeleteStyleThemeQuery,
  useLazyFetchStyleThemeQuery,
  useLazyUpdateStyleThemeQuery,
} = forumApi;
