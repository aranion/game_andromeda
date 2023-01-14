import { sequelize } from './models';
import {
  createUser,
  getUserByDisplayName,
  updateUserById,
  getUserById,
} from './controllers/user.controller';

export async function dbConnect() {
  try {
    await sequelize.authenticate(); // Проверка аутентификации в БД
    await sequelize.sync(); // Синхронизация базы данных
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export function startApp() {
  // dbConnect().then();
  dbConnect().then(async () => {
    /*
     *  Запуск приложения только после старта БД
     */

    // Создаем нового пользователя
    await createUser({
      firstName: 'Alex',
      secondName: 'Ivanov',
      id: null,
      avatar: null,
      displayName: 'Alex',
      email: '',
      login: '',
      phone: '',
    });
    // Получаем пользователей с именем Alex
    const user = await getUserByDisplayName('Alex');

    // Проверяем, найдены ли пользователи
    if (!user) {
      throw 'Not found';
    }

    // Получаем id первого пользователя
    const { id } = user;
    // Обновляем пользователя по ID
    await updateUserById(id, {
      firstName: 'Ivan',
      secondName: 'Ivanov',
      id: id,
      avatar: null,
      displayName: 'Ivan',
      email: '',
      login: '',
      phone: '',
    });

    // Ищем обновленного пользователя по id
    const findedUser = await getUserById(id);
    // Выводим в консоль найденного пользователя
    console.log('Finded user: ', findedUser);
  });
}
