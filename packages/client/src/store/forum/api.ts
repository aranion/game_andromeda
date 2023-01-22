import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// // import { BASE_URL } from 'src/constants/vars';
// import { TopicProps } from './type';
// // import type {
// //   RequestAddLeaderBoard,
// //   RequestAllLeaderBoard,
// //   RequestLeaderBoardTeamName,
// //   ResponseLeaderBoard,
// // } from './type';

// // const DEFAULT_OPTIONS = { method: 'POST', credentials: 'include' } as const;

export const forumApi = createApi({
  reducerPath: 'forum/api',
  baseQuery: fetchBaseQuery({
    // baseUrl: `${BASE_URL}/forum`,
  }),
  endpoints: build => ({
    //     addLeaderBoard: build.query<unknown, RequestAddLeaderBoard>({
    //       query: ({
    //         data,
    //         ratingFieldName = ConfigLeaderBoard.RATING_FIELD_NAME,
    //         teamName = ConfigLeaderBoard.TEAM_NAME,
    //       }) => ({
    //         ...DEFAULT_OPTIONS,
    //         url: '',
    //         body: {
    //           data,
    //           ratingFieldName,
    //           teamName,
    //         },
    //         responseHandler: res => res.text(),
    //       }),
    //     }),
    //     fetchAllLeaderBoard: build.query<Leader[], RequestAllLeaderBoard>({
    //       query: ({
    //         ratingFieldName = ConfigLeaderBoard.RATING_FIELD_NAME,
    //         cursor = 0,
    //         limit = 13,
    //       }) => ({
    //         ...DEFAULT_OPTIONS,
    //         url: '/all',
    //         body: {
    //           ratingFieldName,
    //           cursor,
    //           limit,
    //         },
    //       }),
    //       transformResponse: (res: ResponseLeaderBoard) =>
    //         res.map(leader => leader.data),
    //     }),
    //     fetchTeamLeaderBoard: build.query<Leader[], RequestLeaderBoardTeamName>({
    //       query: ({
    //         teamName = ConfigLeaderBoard.TEAM_NAME,
    //         ratingFieldName = ConfigLeaderBoard.RATING_FIELD_NAME,
    //   cursor = 0,
    //   limit = 13,
    // }) => ({
    //   ...DEFAULT_OPTIONS,
    //   url: `/${teamName}`,
    //   body: {
    //     ratingFieldName,
    //     cursor,
    //     limit,
    //   },
    // }),
    // transformResponse: (res: ResponseLeaderBoard) =>
    //   res.map(leader => leader.data),
    //     }),
  }),
});

// export const {
//   useLazyFetchAllLeaderBoardQuery,
//   useLazyAddLeaderBoardQuery,
//   useLazyFetchTeamLeaderBoardQuery,
// } = leaderBoardApi;
