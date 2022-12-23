import { useState, useEffect } from 'react';

export const useDarkTheme = (): [string, () => void] => {
  const [theme, setTheme] = useState('light');

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !localTheme
      ? setTheme('dark')
      : localTheme
      ? setTheme(localTheme)
      : setMode('light');
  }, []);

  return [theme, toggleTheme];
};
