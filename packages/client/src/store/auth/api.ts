import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants/vars';

export const authApi = createApi({
  reducerPath: 'auth/api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/auth`,
  }),
  endpoints: () => ({}),
});
