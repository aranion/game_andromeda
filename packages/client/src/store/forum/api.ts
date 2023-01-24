import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL } from 'src/constants/vars';
import type { ResponseForum, ResponseComments } from './type';

const DEFAULT_OPTIONS = {
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
} as const;

export const forumApi = createApi({
  reducerPath: 'forum/api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL}/forum`,
  }),
  endpoints: build => ({
    fetchAllForum: build.query<ResponseForum, unknown>({
      query: () => ({
        ...DEFAULT_OPTIONS,
        method: 'GET',
        url: '',
      }),
    }),
    fetchTopicComments: build.query<ResponseComments, number>({
      query: topicId => ({
        ...DEFAULT_OPTIONS,
        method: 'GET',
        url: `/comments/${topicId}`,
      }),
    }),
    fetchTopicCommentsCount: build.query<number, number>({
      query: topicId => ({
        ...DEFAULT_OPTIONS,
        method: 'GET',
        url: `/comments-count/${topicId}`,
      }),
    }),
    addTopic: build.query({
      query: body => ({
        ...DEFAULT_OPTIONS,
        url: '',
        body,
        method: 'POST',
      }),
    }),
    addComment: build.query({
      query: body => ({
        ...DEFAULT_OPTIONS,
        url: '',
        body,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useLazyFetchAllForumQuery,
  useLazyFetchTopicCommentsQuery,
  useLazyFetchTopicCommentsCountQuery,
  useLazyAddTopicQuery,
  useLazyAddCommentQuery,
} = forumApi;
