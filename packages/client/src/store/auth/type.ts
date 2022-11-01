import type { User } from '../user/type';

export type InitialState = {
  isAuth: boolean;
  isLoadingAuth: boolean;
};

export type ResponseAuthUser = User;
export type ResponseLogout = 'OK';
export type ResponseSignIn = 'OK';
export type ResponseSignUp = Pick<User, 'id'>;

export type RequestSignIn = Pick<User, 'login'> & { password: string };
export type RequestSignUp = Omit<User, 'id' | 'avatar' | 'display_name'> & {
  password: string;
};
