import { DataType, Model } from 'sequelize-typescript';
import type { ModelAttributes } from 'sequelize/types';

export interface ITopic {
  id: number | null;
  title: string;
  authorId: number;
  content: number | null;
  forumId: number;
}

export const topicModel: ModelAttributes<Model, ITopic> = {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  },
  title: {
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  },
  authorId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  content: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  forumId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
};
