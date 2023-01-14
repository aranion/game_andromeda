import { Topic } from '../models';
import type { ITopic } from '../models/topic';

// Создание темы форума
export async function createTopic(props: ITopic) {
  const { id } = props;
  return Topic.findOrCreate({
    where: { id },
    defaults: { ...props },
  }).then(() => {
    Topic.update({ ...props }, { where: { id } });
  });
}

// Обновление темы форума по ID
export async function updateTopicById(id: number, data: ITopic) {
  return Topic.update(data, { where: { id } });
}

// Получение темы форума по ID
export async function getTopicById(id: number) {
  return Topic.findOne({ where: { id } });
}

// Получение всех тем форума
export async function getAllTopics() {
  return Topic.findAll();
}

// Удаление темы форума по ID
export async function deleteTopicById(id: number) {
  return Topic.destroy({ where: { id } });
}
