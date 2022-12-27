import { useState, useEffect } from 'react';

const enum ThemeList {
  Light = 'light',
  Dark = 'dark',
}

export const useDarkTheme = (): [string, boolean, () => void] => {
  const [theme, setTheme] = useState<ThemeList>(ThemeList.Light);

  const setMode = (mode: ThemeList) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const isThemeMode = theme === ThemeList.Dark;

  const toggleTheme = () => {
    theme === ThemeList.Light
      ? setMode(ThemeList.Dark)
      : setMode(ThemeList.Light);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as ThemeList;

    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !localTheme
      ? setTheme(ThemeList.Dark)
      : localTheme
      ? setTheme(localTheme)
      : setMode(ThemeList.Light);
  }, []);

  return [theme, isThemeMode, toggleTheme];
};
