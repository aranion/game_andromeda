import express from 'express';
import * as topicController from '../controllers/topic.controller';
import * as commentController from '../controllers/comment.controller';

const router = express.Router();

// Получение всех тем форума
router.get('/topics', topicController.getAllTopics);
// Удаление всех тем форума
router.delete('/topics', topicController.deleteAllTopics);
// Создание темы форума
router.post('/topics', topicController.createTopic);

// Обновление темы форума по ее ID
router.put('/topics/:topicId', topicController.updateTopicById);
// Получение темы форума по ID
router.get('/topics/:topicId', topicController.getTopicById);
// Удаление темы форума по ID
router.delete('/topics/:topicId', topicController.deleteTopicById);

// Создание комментария
router.post('/comment/:topicId', commentController.createComment);
// Обновление комментария по ID
router.put('/comment/:topicId', commentController.updateCommentById);
// Получение комментария по ID
router.get('/comment/:topicId', commentController.getCommentById);
// Удаление комментария по ID
router.delete('/comment/:topicId', commentController.deleteCommentById);

// Получение всех комментариев темы по ее Id
router.get('/comments/:topicId', commentController.getAllComments);
// Получение колличества комментариев темы по ee ID
router.get('/comments/:topicId', commentController.getAllTopicCommentsCount);
// Удаление всех комментариев темы по ee ID
router.delete(
  '/comments/:topicId',
  commentController.deleteAllCommentsByTopicId
);

export default router;
