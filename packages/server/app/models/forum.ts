import { DataType, Model } from 'sequelize-typescript';
import type { ModelAttributes } from 'sequelize/types';

export interface IForum {
  id: number | null;
  forumTitle: string;
  topicsCount: number | null;
  commentsCount: number | null;
}

export const forumModel: ModelAttributes<Model, IForum> = {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  },
  forumTitle: {
    type: DataType.STRING,
    allowNull: false,
  },
  topicsCount: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  commentsCount: {
    type: DataType.INTEGER,
    allowNull: true,
  },
};
