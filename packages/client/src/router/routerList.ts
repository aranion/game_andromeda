export enum RouterList {
  HOME = '/',
  INTRO = '/',
  MAINMENU = '/main',
  NOT_FOUND = '/*',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  FORUM = '/forum',
  FORUM_TOPIC = '/topic',
  GAME = '/game',
  LEADER_BOARD = '/leader-board',
  SERVER_ERROR = '/server-error',
  PROFILE = '/profile',
  PROFILE_EDIT = '/profile/edit',
  PROFILE_EDIT_PASSWORD = '/profile/edit-password',
}

export enum RouterParamsProfile {
  userId = ':userId',
}

export enum RouterParamsForum {
  forumId = ':forumId',
}

export enum RouterParamsTopic {
  topicId = ':topicId',
}
