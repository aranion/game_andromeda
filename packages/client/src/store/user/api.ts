import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../constants/vars'
import type { RequestUserData, ResponseUserData } from './type'

export const userApi = createApi({
  reducerPath: 'user/api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/user`,
  }),
  endpoints: build => ({
    fetchUserData: build.query<ResponseUserData, RequestUserData>({
      query: params => ({
        url: '',
        params,
      }),
      transformResponse: (res: ResponseUserData) => res,
    }),
  }),
})

export const { useLazyFetchUserDataQuery } = userApi
