import { useTypeSelector } from './useTypeSelector';
import { useState, useEffect } from 'react';
import {
  useLazyCreateStyleThemeQuery,
  useLazyFetchStyleThemeQuery,
} from 'src/store/forum';
import { userSelectors } from 'src/store/user';

export const enum ThemeList {
  Light = 'light',
  Dark = 'dark',
}

export const useDarkTheme = (): [string, boolean, () => void] => {
  const [theme, setTheme] = useState<ThemeList>(ThemeList.Light);
  const varTheme = 'theme';

  const { userData } = useTypeSelector(userSelectors.all);

  const [fetchStyleTheme] = useLazyFetchStyleThemeQuery();
  const [createStyleTheme] = useLazyCreateStyleThemeQuery();

  const setMode = (mode: ThemeList) => {
    window.localStorage.setItem(varTheme, mode);
    setTheme(mode);
  };

  const isThemeMode = theme === ThemeList.Dark;

  const toggleTheme = () => {
    const tempTheme = theme;
    theme === ThemeList.Light
      ? setMode(ThemeList.Dark)
      : setMode(ThemeList.Light);

    if (userData.id) {
      createStyleTheme({ ownerId: userData.id, themeName: theme }).catch(
        err => {
          setMode(tempTheme);
          console.error(err);
        }
      );
    }
  };

  useEffect(() => {
    if (userData.id) {
      fetchStyleTheme(userData.id)
        .then(res => {
          if (res.data) {
            setTheme(res.data);
            window.localStorage.setItem('theme', res.data);
          }
        })
        .catch(console.error);
    }

    const localTheme = window.localStorage.getItem(
      varTheme
    ) as ThemeList | null;

    window.matchMedia &&
    window.matchMedia(`(prefers-color-scheme: ${ThemeList.Dark})`).matches &&
    !localTheme
      ? setTheme(ThemeList.Dark)
      : localTheme
      ? setTheme(localTheme)
      : setMode(ThemeList.Light);
  }, [userData.id]);

  return [theme, isThemeMode, toggleTheme];
};
