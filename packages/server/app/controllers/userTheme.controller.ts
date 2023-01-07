import { UserTheme } from '../models';
import type { IUserTheme } from '../models/userTheme';

// Создание темы пользователя
export async function createUserTheme(props: IUserTheme) {
  const { ownerId } = props;

  return UserTheme.findOrCreate({
    where: { ownerId },
    defaults: { ...props },
  }).then(() => {
    UserTheme.update({ ...props }, { where: { ownerId } });
  });
}

// Обновление темы пользователя
export async function updateUserThemeById(ownerId: number, data: IUserTheme) {
  return UserTheme.update(data, { where: { ownerId } });
}

// Удаление темы пользователя по ID
export async function deleteUserThemeById(ownerId: number) {
  return UserTheme.destroy({ where: { ownerId } });
}

// Получение темы пользователя по ID
export async function getUserThemeById(ownerId: number) {
  return UserTheme.findOne({ where: { ownerId } });
}
