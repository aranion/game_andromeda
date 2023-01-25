import { Comment } from '../config/db.config';
import type { Request, Response } from 'express';

// Создание комментария
export const createComment = async (req: Request, res: Response) => {
  console.log('>>>DEBUG<<<');
  console.log('>>>DEBUG-req.params<<<', req.params);
  console.log('>>>DEBUG-req.body<<<', req.body);
  const topicId = Number(req.params.topicId);
  const { authorId, content } = req.body;

  if (!authorId || !content || !topicId) {
    res.status(400).send({
      message: 'Comment cannot be empty!',
    });
    return;
  }

  await Comment.create({ authorId, content, topicId })
    .then(data => {
      console.log('>>>DEBUG<<<', data);
      res.send(JSON.stringify(data));
    })
    .catch(err => {
      console.log('>>>DEBUG<<<', err);
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the comment.',
      });
    });
};

// Обновление комментария по ID
export const updateCommentById = async (req: Request, res: Response) => {
  console.log('>>>DEBUG<<<');
  console.log('>>>DEBUG-req.params<<<', req.params);
  console.log('>>>DEBUG-req.body<<<', req.body);
  const id = Number(req.body.id);

  await Comment.update(req.body, { where: { id } })
    .then(num => {
      console.log('>>>DEBUG<<<', num);
      if (num[0] === 1) {
        res.send({
          message: 'Comment was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update comment with id=${id}. Maybe comment was not found or req.body is empty!`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: `Error updating comment with id=${id}`,
      });
    });
};

// Получение комментария по ID
export const getCommentById = async (req: Request, res: Response) => {
  console.log('>>>DEBUG<<<');
  console.log('>>>DEBUG-req.params<<<', req.params);
  console.log('>>>DEBUG-req.body<<<', req.body);
  const id = Number(req.body.id);

  await Comment.findByPk(id)
    .then(data => {
      console.log('>>>DEBUG<<<', data);
      if (data) {
        res.send(JSON.stringify(data));
      } else {
        res.status(404).send({
          message: `Cannot find comment with id=${id}.`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: `Error retrieving comment with id=${id}.`,
      });
    });
};

// Удаление комментария по ID
export const deleteCommentById = async (req: Request, res: Response) => {
  console.log('>>>DEBUG<<<');
  console.log('>>>DEBUG-req.params<<<', req.params);
  console.log('>>>DEBUG-req.body<<<', req.body);
  const id = Number(req.params.topicId);

  await Comment.destroy({ where: { id } })
    .then(num => {
      console.log('>>>DEBUG<<<', num);
      if (num === 1) {
        res.send({
          message: 'Comment was deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete comment with id=${id}. Maybe comment was not found!`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: `Could not delete comment with id=${id}`,
      });
    });
};

// Получение всех комментариев темы по ее Id
export const getAllComments = async (req: Request, res: Response) => {
  console.log('>>>DEBUG<<<');
  console.log('>>>DEBUG-req.params<<<', req.params);
  console.log('>>>DEBUG-req.body<<<', req.body);
  const topicId = req.params.topicId;

  await Comment.findAll({ where: { topicId } })
    .then(data => {
      console.log('>>>DEBUG<<<', data);
      res.send(JSON.stringify(data));
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving comments.',
      });
    });
};

// Получение колличества комментариев темы по ee ID
export const getAllTopicCommentsCount = async (req: Request, res: Response) => {
  console.log('>>>DEBUG<<<');
  console.log('>>>DEBUG-req.params<<<', req.params);
  console.log('>>>DEBUG-req.body<<<', req.body);
  const topicId = req.params.topicId;

  await Comment.findAndCountAll({ where: { topicId } })
    .then(data => {
      console.log('>>>DEBUG<<<', data);
      res.send(data.count);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving comments.',
      });
    });
};

// Удаление всех комментариев темы по ee ID
export const deleteAllCommentsByTopicId = async (
  req: Request,
  res: Response
) => {
  console.log('>>>DEBUG<<<');
  console.log('>>>DEBUG-req.params<<<', req.params);
  console.log('>>>DEBUG-req.body<<<', req.body);
  const topicId = req.params.topicId;

  await Comment.destroy({
    where: { topicId },
    truncate: false,
  })
    .then(nums => {
      console.log('>>>DEBUG<<<', nums);
      res.send({ message: `${nums} comments were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all comments.',
      });
    });
};
