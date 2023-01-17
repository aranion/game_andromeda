import { Forum } from '../config/db.config';
import type { Request, Response } from 'express';

// Создание форума
export const createForum = async (req: Request, res: Response) => {
  const { title } = req.body;

  if (!title) {
    res.status(400).send({
      message: 'Forum name cannot be empty!',
    });
    return;
  }

  await Forum.create({ title })
    .then(data => {
      res.send(JSON.stringify(data));
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the forum.',
      });
    });
};

// Обновление форума по ID
export const updateForumById = async (req: Request, res: Response) => {
  const id = Number(req.params.forumId);

  await Forum.update(req.body, { where: { id } })
    .then(num => {
      if (num[0] === 1) {
        res.send({
          message: 'Forum was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update forum with id=${id}. Maybe forum was not found or req.body is empty!`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: `Error updating forum with id=${id}`,
      });
    });
};

// Получение форума по ID
export const getForumById = async (req: Request, res: Response) => {
  const id = Number(req.params.forumId);

  await Forum.findByPk(id)
    .then(data => {
      if (data) {
        res.send(JSON.stringify(data));
      } else {
        res.status(404).send({
          message: `Cannot find forum with id=${id}.`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: `Error retrieving forum with id=${id}.`,
      });
    });
};

// Удаление форума по ID
export const deleteForumById = async (req: Request, res: Response) => {
  const id = Number(req.params.forumId);

  await Forum.destroy({ where: { id } })
    .then(num => {
      if (num === 1) {
        res.send({
          message: 'Forum was deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete forum with id=${id}. Maybe forum was not found!`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: `Could not delete forum with id=${id}`,
      });
    });
};

// Получение всех форумов
export const getAllForums = async (_: any, res: Response) => {
  await Forum.findAll()
    .then(data => {
      res.send(JSON.stringify(data));
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving forums.',
      });
    });
};

// Удаление всех форумов
export const deleteAllForums = async (_: any, res: Response) => {
  await Forum.destroy({
    where: {},
    truncate: false,
  })
    .then(nums => {
      res.send({ message: `${nums} forums were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all forums.',
      });
    });
};
