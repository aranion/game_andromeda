export type InitialState = {
  userData: User | null
}

export type User = {
  avatar: string
  display_name: string
  email: string
  first_name: string
  id: number
  login: string
  phone: string
  second_name: string
}

export type ResponseUserData = User

export type RequestUserData = Pick<User, 'id'>
