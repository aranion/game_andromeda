import { DataType, Model } from 'sequelize-typescript';
import type { ModelAttributes } from 'sequelize/types';

export interface ITopic {
  id: number | null;
  topicTitle: string;
  topicAuthorId: number | null;
  topicContent: number | null;
  commentsCount: number | null;
  forumId: number | null;
}

export const topicModel: ModelAttributes<Model, ITopic> = {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  },
  topicTitle: {
    type: DataType.STRING,
    allowNull: false,
  },
  topicAuthorId: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  topicContent: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  commentsCount: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  forumId: {
    type: DataType.INTEGER,
    allowNull: true,
  },
};
