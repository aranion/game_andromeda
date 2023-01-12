import { Comment } from '../models';
import type { IComment } from '../models/comment';

// Создание комментария
export async function createComment(props: IComment) {
  const { id } = props;
  return Comment.findOrCreate({
    where: { id },
    defaults: { ...props },
  }).then(() => {
    Comment.update({ ...props }, { where: { id } });
  });
}

// Обновление комментария по ID
export async function updateCommentById(id: number, data: IComment) {
  return Comment.update(data, { where: { id } });
}

// Получение комментария по ID
export async function getCommentById(id: number) {
  return Comment.findOne({ where: { id } });
}

// Получение всех комментариев
export async function getAllComments() {
  return Comment.findAll();
}

// Удаление комментария по ID
export async function deleteCommentById(id: number) {
  return Comment.destroy({ where: { id } });
}
