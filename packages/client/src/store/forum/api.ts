import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL } from 'src/constants/vars';
import type { TopicProps } from './type';
import type { ForumData, ResponseForum } from './type';

export const forumApi = createApi({
  reducerPath: 'forum/api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL}/forum`,
  }),
  endpoints: build => ({
    fetchAllForum: build.query<TopicProps[], ForumData>({
      query: () => '',
      transformResponse: (res: ResponseForum) => res.map(topic => topic.data),
    }),
  }),
});

export const { useLazyFetchAllForumQuery } = forumApi;
