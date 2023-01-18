import express from 'express';
import * as topicController from '../controllers/topic.controller';
import * as commentController from '../controllers/comment.controller';

const router = express.Router();

// Получение всех тем форума
router.get('/', topicController.getAllTopics);

// Удаление всех тем форума
router.delete('/', topicController.deleteAllTopics);

// Создание темы форума
router.post('/', topicController.createTopic);

// Обновление темы форума по ее ID
router.put('/:topicId', topicController.updateTopicById);

// Получение темы форума по ID
router.get('/:topicId', topicController.getTopicById);

// Удаление темы форума по ID
router.delete('/:topicId', topicController.deleteTopicById);

// Создание комментария
router.post('/:topicId', commentController.createComment);

// Обновление комментария по ID
router.put('/:topicId', commentController.updateCommentById);

// Получение комментария по ID
router.get('/:topicId', commentController.getCommentById);

// Удаление комментария по ID
router.delete('/:topicId', commentController.deleteCommentById);

// Получение всех комментариев темы по ее Id
router.get('/:topicId', commentController.getAllComments);

// Получение колличества комментариев темы по ee ID
router.get('/:topicId', commentController.getAllTopicCommentsCount);

// Удаление всех комментариев темы по ee ID
router.delete('/:topicId', commentController.deleteAllCommentsByTopicId);

export default router;
