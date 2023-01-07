import { DataType, Model } from 'sequelize-typescript';
import type { ModelAttributes } from 'sequelize/types';

export interface IUser {
  id: number | null;
  avatar: string | null;
  display_name: string | null;
  email: string;
  first_name: string;
  login: string;
  phone: string;
  second_name: string;
}

export const userModel: ModelAttributes<Model, IUser> = {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  },
  avatar: {
    type: DataType.STRING,
    allowNull: true,
  },
  display_name: {
    type: DataType.STRING,
    allowNull: true,
  },
  email: {
    type: DataType.STRING,
    allowNull: false,
  },
  first_name: {
    type: DataType.STRING,
    allowNull: false,
  },
  login: {
    type: DataType.STRING,
    allowNull: false,
  },
  phone: {
    type: DataType.STRING,
    allowNull: false,
  },
  second_name: {
    type: DataType.STRING,
    allowNull: false,
  },
};
