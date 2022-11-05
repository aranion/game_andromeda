import type { RootState } from '../';
import type { User } from './type';

export const allUser = (state: RootState) => state.user;

export const keyAndValueUserData = (state: RootState) => {
  return Object.entries(allUser(state).userData) as KeyAndValueUserData[];
};

export type KeyAndValueUserData =
  | [keyof Omit<User, 'avatar' | 'display_name' | 'id'>, string]
  | [keyof Pick<User, 'id'>, number | null]
  | [keyof Pick<User, 'avatar' | 'display_name'>, string | null];

