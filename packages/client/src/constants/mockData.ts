import type { Leader } from '../pages/LeaderBoard';
import type { RequestSignUp } from '../store/auth/type';
import type { RequestSignIn } from '../store/auth/type';

export const mockParamsSignIn: RequestSignIn = {
  login: 'Xxxxx',
  password: '123XXXxxx',
};

export const mockParamsSignUp: RequestSignUp = {
  email: 'xxxxxxxxxxx@mail.ru',
  first_name: 'Xxxxxxx',
  login: 'Xxxxxxxxxxxx',
  password: '123XXXxxx',
  phone: '123456789',
  second_name: 'Xxxxx',
};

export const mockLeader: Leader[] = [
  { userId: 91209, nickname: 'Player 1', highScore: 223112123 },
  { userId: 63836, nickname: 'Player 2', highScore: 22311231 },
  { userId: 91209, nickname: 'Player 3', highScore: 2231123 },
  { userId: 91209, nickname: 'Player 4', highScore: 2231231 },
  { userId: 91209, nickname: 'Player 5', highScore: 223112 },
  { userId: 91209, nickname: 'Player 6', highScore: 2231 },
  { userId: 91209, nickname: 'Player 7', highScore: 231 },
  { userId: 91209, nickname: 'Player 8', highScore: 231 },
  { userId: 91209, nickname: 'Player 9', highScore: 21 },
  { userId: 91209, nickname: 'Player 10', highScore: 21 },
  { userId: 91209, nickname: 'Player 11', highScore: 21 },
  { userId: 91209, nickname: 'Player 12', highScore: 21 },
  { userId: 91209, nickname: 'Player 13', highScore: 21 },
  { userId: 91209, nickname: 'Player 14', highScore: 21 },
  { userId: 91209, nickname: 'Player 15', highScore: 21 },
  { userId: 91209, nickname: 'Player 16', highScore: 21 },
];
