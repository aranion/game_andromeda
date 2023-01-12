import { Topic } from '../models';
import type { ITopic } from '../models/topic';

// Создание темы форума
export async function createTopic(props: ITopic) {
  const { topicId } = props;
  return Topic.findOrCreate({
    where: { topicId },
    defaults: { ...props },
  }).then(() => {
    Topic.update({ ...props }, { where: { topicId } });
  });
}

// Обновление темы форума по ID
export async function updateTopicById(topicId: number, data: ITopic) {
  return Topic.update(data, { where: { topicId } });
}

// Получение темы форума по ID
export async function getTopicById(topicId: number) {
  return Topic.findOne({ where: { topicId } });
}

// Получение всех тем форума
export async function getAllTopics() {
  return Topic.findAll();
}

// Удаление темы форума по ID
export async function deleteTopicById(topicId: number) {
  return Topic.destroy({ where: { topicId } });
}
