import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'src/constants/vars';
import type {
  RequestSignIn,
  RequestSignUp,
  ResponseLogout,
  ResponseSignIn,
  ResponseSignUp,
  ResponseAuthUser,
} from './type';

export const authApi = createApi({
  reducerPath: 'auth/api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/auth`,
  }),
  endpoints: build => ({
    checkAuthUser: build.query<ResponseAuthUser, unknown>({
      query: () => ({
        url: '/user',
        credentials: 'include',
      }),
    }),
    logout: build.mutation<ResponseLogout, unknown>({
      query: () => ({
        url: '/logout',
        method: 'POST',
        credentials: 'include',
        responseHandler: res => res.text(),
      }),
    }),
    signIn: build.mutation<ResponseSignIn, RequestSignIn>({
      query: body => ({
        url: '/signin',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        credentials: 'include',
        responseHandler: res => res.text(),
      }),
    }),
    signUp: build.mutation<ResponseSignUp, RequestSignUp>({
      query: body => ({
        url: '/signup',
        method: 'POST',
        body,
        credentials: 'include',
      }),
    }),
  }),
});

export const {
  useLazyCheckAuthUserQuery,
  useLogoutMutation,
  useSignInMutation,
  useSignUpMutation,
} = authApi;
