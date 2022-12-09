export type UserInitialState = {
  userData: User;
};

export type User = {
  avatar: string | null;
  display_name: string | null;
  email: string;
  first_name: string;
  id: number | null;
  login: string;
  phone: string;
  second_name: string;
};

export type ResponseUserData = User;
export type ResponseUpdateProfile = User & { status?: string | null };

export type RequestUserData = string;
export type RequestUpdateAvatar = FormData;
export type RequestUpdatePassword = {
  oldPassword: string;
  newPassword: string;
};
export type RequestUpdateProfile = Omit<User, 'id' | 'avatar'>;

type FormData = Record<string, unknown>;
