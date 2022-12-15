export enum RouterList {
  HOME = '/',
  MAINMENU = '/',
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
  OAUTH_TOKEN = '/oauth/',
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
