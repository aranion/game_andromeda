import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'src/constants/vars';
import type {
  RequestUpdateAvatar,
  RequestUpdatePassword,
  RequestUpdateProfile,
  RequestUserData,
  ResponseUpdateProfile,
  ResponseUserData,
  User,
} from './type';

const DEFAULT_OPTIONS = { credentials: 'include', method: 'PUT' } as const;

const transformResponse = (res: ResponseUpdateProfile) => {
  delete res.status;
  return res;
};

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
    }),
    updateProfile: build.query<User, RequestUpdateProfile>({
      query: body => ({
        ...DEFAULT_OPTIONS,
        url: '/profile',
        body,
      }),
      transformResponse,
    }),
    updateAvatar: build.query<User, RequestUpdateAvatar>({
      query: body => ({
        ...DEFAULT_OPTIONS,
        url: '/profile/avatar',
        body,
      }),
      transformResponse,
    }),
    updatePassword: build.query<string, RequestUpdatePassword>({
      query: body => ({
        ...DEFAULT_OPTIONS,
        url: '/password',
        body,
        responseHandler: res => res.text(),
      }),
    }),
  }),
});

export const {
  useLazyFetchUserDataQuery,
  useLazyUpdateAvatarQuery,
  useLazyUpdatePasswordQuery,
  useLazyUpdateProfileQuery,
} = userApi;
