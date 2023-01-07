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

// Удаление пользователя по ID
export async function deleteUserById(id: number) {
  return User.destroy({ where: { id } });
}

// Получение пользователя по ID
export async function getUserById(id: number) {
  return User.findOne({ where: { id } });
}

// Получение пользователей по ID
export async function getUsersByFirstName(firstName: string) {
  return User.findAll({ where: { firstName } });
}

// Получение всех пользователей
export async function getAllUsers() {
  return User.findAll();
}
