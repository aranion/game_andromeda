import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'src/constants/vars';

export const resourcesApi = createApi({
  reducerPath: 'resources/api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/resources`,
  }),
  endpoints: build => ({
    fetchAvatar: build.query<Blob, string>({
      query: path => ({
        url: `${path}`,
        credentials: 'include',
        responseHandler: res => res.blob(),
      }),
    }),
  }),
});

export const { useLazyFetchAvatarQuery } = resourcesApi;
