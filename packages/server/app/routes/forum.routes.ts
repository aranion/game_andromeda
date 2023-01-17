import express from 'express';
import * as forumController from '../controllers/forum.controller';
import * as topicController from '../controllers/topic.controller';
import * as commentController from '../controllers/comment.controller';

const router = express.Router();

// Создать форум
router.post('/', forumController.createForum);

// Обновление форума по ID
router.put('/:forumId', forumController.updateForumById);

// Получение форума по ID
router.get('/:forumId', forumController.getForumById);

// Удаление форума по ID
router.delete('/:forumId', forumController.deleteForumById);

// Получение всех форумов
router.get('/', forumController.getAllForums);

// Удаление всех форумов
router.delete('/', forumController.deleteAllForums);

// Получение всех тем форума по его ID
router.get('/:forumId', topicController.getAllTopics);

// Получение колличества тем форума по его ID
router.get('/:forumId', topicController.getAllTopicsCount);

// Удаление всех тем форума по его ID
router.delete('/:forumId', topicController.deleteAllTopicsByForumId);

// Создание темы форума
router.post('/:forumId', topicController.createTopic);

// Получение колличества комментариев форума по eго ID
router.get('/:forumId', commentController.getAllForumCommentsCount);

export default router;
