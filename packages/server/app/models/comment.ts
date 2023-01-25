import { DataType, Model } from 'sequelize-typescript';
import type { ModelAttributes } from 'sequelize/types';

export interface IComment {
  id: number | null;
  content: string;
  authorId: number;
  topicId: number;
}

export const commentModel: ModelAttributes<Model, IComment> = {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  },
  content: {
    type: DataType.STRING,
    allowNull: false,
  },
  authorId: {
    type: DataType.INTEGER,
    allowNull: true,
  },
  topicId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
};
