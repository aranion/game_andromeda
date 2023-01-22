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
router.put('/topic/:topicId', topicController.updateTopicById);
// Получение темы форума по ID
router.get('/topic/:topicId', topicController.getTopicById);
// Удаление темы форума по ID
router.delete('/topic/:topicId', topicController.deleteTopicById);

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
router.get(
  '/comments-count/:topicId',
  commentController.getAllTopicCommentsCount
);
// Удаление всех комментариев темы по ee ID
router.delete(
  '/comments/:topicId',
  commentController.deleteAllCommentsByTopicId
);

export default router;
