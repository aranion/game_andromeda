import { DataType, Model } from 'sequelize-typescript';
import type { ModelAttributes } from 'sequelize/types';

export interface ITopic {
  id: number | null;
  title: string;
  authorId: number;
  content: string | null;
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
    type: DataType.STRING,
    allowNull: true,
  },
};
