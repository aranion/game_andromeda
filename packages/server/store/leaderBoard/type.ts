export type LeaderBoardInitialState = {
  leaders: Leader[];
};

export enum ConfigLeaderBoard {
  TEAM_NAME = 'andromeda',
  RATING_FIELD_NAME = 'highScore',
}

export type Leader = {
  id: number;
  nickname?: string;
  avatar?: string | null;
  [ConfigLeaderBoard.RATING_FIELD_NAME]: number;
};
