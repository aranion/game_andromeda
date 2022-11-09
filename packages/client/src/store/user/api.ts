import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'src/constants/vars';
import type { RequestUserData, ResponseUserData } from './type';

export const userApi = createApi({
  reducerPath: 'user/api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/user`,
  }),
  endpoints: build => ({
    fetchUserData: build.query<ResponseUserData, RequestUserData>({
      query: userId => ({
        url: `/${userId}`,
        credentials: 'include',
      }),
      transformResponse: (res: ResponseUserData) => res,
    }),
  }),
});

export const { useLazyFetchUserDataQuery } = userApi;
