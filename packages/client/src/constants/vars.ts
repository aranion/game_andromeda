enum Language {
  eng = 'eng',
  rus = 'rus',
}

export const LANGUAGE = Language.eng;

export const CONFIG_STARS_PARAMS = {
  amount: 200,
  size: {
    min: 1,
    max: 5,
    giant: 9,
  },
  duration: {
    min: 10,
    max: 40,
  },
} as const;
