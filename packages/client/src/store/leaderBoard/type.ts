export type InitialState = {
  leaders: Leader[];
};

export enum ConfigLeaderBoard {
  TEAM_NAME = 'andromeda',
  RATING_FIELD_NAME = 'highScore',
}

export type Leader = {
  userId: number;
  nickname: string;
  avatar: string | null;
  [ConfigLeaderBoard.RATING_FIELD_NAME]: number;
};

type LeaderBoardData = { data: Leader };

export type RequestAllLeaderBoard = Partial<{
  ratingFieldName: ConfigLeaderBoard.RATING_FIELD_NAME;
  cursor: number;
  limit: number;
}>;

export type RequestLeaderBoardTeamName = Partial<
  {
    teamName: ConfigLeaderBoard.TEAM_NAME;
  } & RequestAllLeaderBoard
>;

export type RequestAddLeaderBoard = LeaderBoardData &
  Omit<RequestLeaderBoardTeamName, 'cursor' | 'limit'>;

export type ResponseLeaderBoard = LeaderBoardData[];
