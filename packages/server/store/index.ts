import { authActions } from './store/auth';

export const getInitialState = (pathname = '/'): any => {
  return {
    user: {
      userData: {
        avatar: null,
        display_name: null,
        email: '',
        first_name: '',
        id: null,
        login: '',
        phone: '',
        second_name: '',
      },
    },
    leaderBoard: { leaders: [] },
    game: { hightScore: null },
    auth: { isAuth: false, isLoadingAuth: true },
    router: {
      location: { pathname, search: '', hash: '', key: '' },
      action: 'POP',
    } as any,
  };
};

export const allActions = {
  ...authActions,
};
