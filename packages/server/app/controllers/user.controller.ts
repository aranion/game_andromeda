import { User } from '../models';
import type { IUser } from '../models/user';

// Создание пользователя
export async function createUser(props: IUser) {
  const { id } = props;
  return User.findOrCreate({
    where: { id },
    defaults: { ...props },
  }).then(() => {
    User.update({ ...props }, { where: { id } });
  });
}

// Обновление пользователя по ID
export async function updateUserById(id: number, data: IUser) {
  return User.update(data, { where: { id } });
}

// Получение пользователя по ID
export async function getUserById(id: number) {
  return User.findOne({ where: { id } });
}

// Получение пользователя по displayName
export async function getUserByFirstName(displayName: string) {
  return User.findOne({ where: { displayName } });
}

// Получение всех пользователей
export async function getAllUsers() {
  return User.findAll();
}

// Удаление пользователя по ID
export async function deleteUserById(id: number) {
  return User.destroy({ where: { id } });
}

// Удаление всех пользователей
export async function deleteAllUsers() {
  return User.destroy();
}
