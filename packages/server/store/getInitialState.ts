import { authInitialState } from './auth/slice';
import { gameInitialState } from './game/slice';
import { userInitialState } from './user/slice';
import { leaderBoardInitialState } from './leaderBoard/slice';
import type { History } from 'history';

export const getInitialState = (pathname = '/') => {
  return {
    user: userInitialState,
    leaderBoard: leaderBoardInitialState,
    game: gameInitialState,
    auth: authInitialState,
    router: {
      location: { pathname, search: '', hash: '', key: '' },
      action: 'POP',
    } as History,
  };
};

export type RootState = ReturnType<typeof getInitialState>;
