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
