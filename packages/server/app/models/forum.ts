import { DataType, Model } from 'sequelize-typescript';
import type { ModelAttributes } from 'sequelize/types';

export interface IForum {
  id: number | null;
  title: string;
}

export const forumModel: ModelAttributes<Model, IForum> = {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  },
  title: {
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  },
};
