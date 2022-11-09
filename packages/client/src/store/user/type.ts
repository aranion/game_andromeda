export type InitialState = {
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

export type RequestUserData = string;
