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
router.get('/forum', forumController.getAllForums);

// Удаление всех форумов
router.delete('/forum', forumController.deleteAllForums);

// Получение всех тем форума по его ID
router.get('/:forumId', topicController.getAllTopics);

// Получение колличества тем форума по его ID
router.get('/:forumId', topicController.getAllTopicsCount);

// Удаление всех тем форума по его ID
router.delete('/:forumId', topicController.deleteAllTopicsByForumId);

// Создание темы форума
router.post('/:forumId', topicController.createTopic);

// Обновление темы форума по ее ID
router.put('/:forumId', topicController.updateTopicById);

// Получение темы форума по ID
router.get('/:forumId', topicController.getTopicById);

// Удаление темы форума по ID
router.delete('/:forumId', topicController.deleteTopicById);

// Создание комментария
router.post('/:forumId', commentController.createComment);

// Обновление комментария по ID
router.put('/:forumId', commentController.updateCommentById);

// Получение комментария по ID
router.get('/:forumId', commentController.getCommentById);

// Удаление комментария по ID
router.delete('/:forumId', commentController.deleteCommentById);

// Получение всех комментариев темы по ее Id
router.get('/:topicId', commentController.getAllComments);

// Получение колличества комментариев темы по ee ID
router.get('/:topicId', commentController.getAllTopicCommentsCount);

// Получение колличества комментариев форума по eго ID
router.get('/:forumId', commentController.getAllForumCommentsCount);

// Удаление всех комментариев темы по ee ID
router.delete('/:topicId', commentController.deleteAllCommentsByTopicId);

export default router;
