import { Topic } from '../config/db.config';
import type { Request, Response } from 'express';

// Создание темы форума
export const createTopic = async (req: Request, res: Response) => {
  const { title, authorId, content, forumId } = req.body;

  if (!title || !authorId || !forumId) {
    res.status(400).send({
      message: 'Topic name cannot be empty!',
    });
    return;
  }

  await Topic.create({ title, authorId, content, forumId })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the topic.',
      });
    });
};

// Обновление темы форума по ее ID
export const updateTopicById = async (req: Request, res: Response) => {
  const id = req.params.id;

  await Topic.update(req.body, { where: { id } })
    .then(num => {
      if (num[0] === 1) {
        res.send({
          message: 'Topic was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update topic with id=${id}. Maybe topic was not found or req.body is empty!`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: `Error updating topic with id=${id}`,
      });
    });
};

// Получение темы форума по ID
export const getTopicById = async (req: Request, res: Response) => {
  const id = req.params.id;

  await Topic.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find topic with id=${id}.`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: `Error retrieving topic with id=${id}.`,
      });
    });
};

// Удаление темы форума по ID
export const deleteTopicById = async (req: Request, res: Response) => {
  const id = req.params.id;

  await Topic.destroy({ where: { id } })
    .then(num => {
      if (num === 1) {
        res.send({
          message: 'Topic was deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete topic with id=${id}. Maybe topic was not found!`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: `Could not delete topic with id=${id}`,
      });
    });
};

// Получение всех тем форума по его ID
export const getAllTopics = async (req: Request, res: Response) => {
  const forumId = req.params.forumId;

  await Topic.findAll({ where: { forumId } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving topics.',
      });
    });
};

// Получение колличества тем форума по его ID
export const getAllTopicsCount = async (req: Request, res: Response) => {
  const forumId = req.params.forumId;

  await Topic.findAndCountAll({ where: { forumId } })
    .then(data => {
      res.send(data.count);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving topics.',
      });
    });
};

// Удаление всех тем форума по его ID
export const deleteAllTopicsByForumId = async (req: Request, res: Response) => {
  const forumId = req.params.forumId;

  await Topic.destroy({
    where: { forumId },
    truncate: false,
  })
    .then(nums => {
      res.send({ message: `${nums} topics were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all topics.',
      });
    });
};
