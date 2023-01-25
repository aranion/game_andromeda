import { UserTheme } from '../config/db.config';
import type { Request, Response } from 'express';

// Создание темы пользователя
export const createUserTheme = async (req: Request, res: Response) => {
  console.log('>>>DEBUG<<<');
  console.log('>>>DEBUG-req.params<<<', req.params);
  console.log('>>>DEBUG-req.body<<<', req.body);
  const { ownerId, themeName } = req.body;

  if (!ownerId || !themeName) {
    res.status(400).send({
      message: 'Theme user id not specified',
    });
    return;
  }

  await UserTheme.create({ themeName, ownerId })
    .then(data => {
      res.send(JSON.stringify(data));
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the theme user.',
      });
    });
};

// Обновление темы пользователя по его ID
export const updateUserThemeById = async (req: Request, res: Response) => {
  console.log('>>>DEBUG<<<');
  console.log('>>>DEBUG-req.params<<<', req.params);
  console.log('>>>DEBUG-req.body<<<', req.body);
  const { ownerId, themeName } = req.body;

  if (!ownerId || !themeName) {
    res.status(400).send({
      message: 'Theme user id not specified',
    });
    return;
  }

  await UserTheme.update({ themeName }, { where: { ownerId }, validate: true })
    .then(num => {
      if (num[0] === 1) {
        res.send({
          message: 'Theme user was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update theme user with id=${ownerId}. Maybe theme user was not found or req.body is empty!`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: `Error updating theme user with id=${ownerId}`,
      });
    });
};

// Удаление темы пользователя по его ID
export const deleteUserThemeById = async (req: Request, res: Response) => {
  console.log('>>>DEBUG<<<');
  console.log('>>>DEBUG-req.params<<<', req.params);
  console.log('>>>DEBUG-req.body<<<', req.body);
  const ownerId = Number(req.params.ownerId);

  await UserTheme.destroy({ where: { ownerId } })
    .then(num => {
      if (num === 1) {
        res.send({
          message: 'Theme user was deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete theme user with id=${ownerId}. Maybe comment was not found!`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: `Could not delete theme user with id=${ownerId}`,
      });
    });
};

// Получение темы пользователя по его ID
export const getUserThemeById = async (req: Request, res: Response) => {
  console.log('>>>DEBUG<<<');
  console.log('>>>DEBUG-req.params<<<', req.params);
  console.log('>>>DEBUG-req.body<<<', req.body);
  const ownerId = Number(req.params.ownerId);

  await UserTheme.findByPk(ownerId)
    .then(data => {
      if (data) {
        res.send(JSON.stringify(data));
      } else {
        res.status(404).send({
          message: `Cannot find theme user with id=${ownerId}.`,
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: `Error retrieving theme user with id=${ownerId}.`,
      });
    });
};
