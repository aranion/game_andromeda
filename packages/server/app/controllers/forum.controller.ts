import { Forum } from '../models';
import type { IForum } from '../models/forum';

// Создание форума
export async function createForum(props: IForum) {
  const { id } = props;
  return Forum.findOrCreate({
    where: { id },
    defaults: { ...props },
  }).then(() => {
    Forum.update({ ...props }, { where: { id } });
  });
}

// Обновление форума по ID
export async function updateForumById(id: number, data: IForum) {
  return Forum.update(data, { where: { id } });
}

// Получение форума по ID
export async function getForumById(id: number) {
  return Forum.findOne({ where: { id } });
}

// Получение всех форумов
export async function getAllForums() {
  return Forum.findAll();
}

// Удаление форума по ID
export async function deleteForumById(id: number) {
  return Forum.destroy({ where: { id } });
}
