enum Language {
  eng = 'eng',
  rus = 'rus',
}

const isProd = process.env.NODE_ENV === 'production';

export const URL = isProd
  ? `${window.location.origin}`
  : 'http://localhost:3000';
export const URL_SERVER = isProd
  ? `${window.location.origin}/api`
  : 'http://localhost:3001';
export const BASE_URL = 'https://ya-praktikum.tech/api/v2';

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
