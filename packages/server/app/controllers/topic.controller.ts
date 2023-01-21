import { Topic } from '../config/db.config';
import type { Request, Response } from 'express';

// Создание темы
export const createTopic = async (req: Request, res: Response) => {
  console.log('>>>DEBUG<<<', req, res);
  const { title, authorId, content } = req.body;

  if (!title || !authorId) {
    res.status(400).send({
      message: 'Topic name cannot be empty!',
    });
    return;
  }

  await Topic.create({ title, authorId, content })
    .then(data => {
      res.send(JSON.stringify(data));
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the topic.',
      });
    });
};

// Обновление темы по ID
export const updateTopicById = async (req: Request, res: Response) => {
  console.log('>>>DEBUG<<<', req, res);
  const id = Number(req.params.topicId);

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

// Получение темы по ID
export const getTopicById = async (req: Request, res: Response) => {
  console.log('>>>DEBUG<<<', req, res);
  const id = Number(req.params.topicId);

  await Topic.findByPk(id)
    .then(data => {
      if (data) {
        res.send(JSON.stringify(data));
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

// Удаление темы по ID
export const deleteTopicById = async (req: Request, res: Response) => {
  console.log('>>>DEBUG<<<', req, res);
  const id = Number(req.params.topicId);

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

// Получение всех тем форума
export const getAllTopics = async (_: Request, res: Response) => {
  console.log('>>>DEBUG<<<', _, res);
  await Topic.findAll()
    .then(data => {
      res.send(JSON.stringify(data));
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving topics.',
      });
    });
};

// Удаление всех тем форума
export const deleteAllTopics = async (_: Request, res: Response) => {
  console.log('>>>DEBUG<<<', _, res);
  await Topic.destroy({
    where: {},
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
