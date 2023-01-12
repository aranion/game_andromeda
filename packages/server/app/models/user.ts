import { DataType, Model } from 'sequelize-typescript';
import type { ModelAttributes } from 'sequelize/types';

export interface IUser {
  id: number | null;
  avatar: string | null;
  displayName: string | null;
  email: string;
  firstName: string;
  login: string;
  phone: string;
  secondName: string;
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
  displayName: {
    type: DataType.STRING,
    allowNull: true,
  },
  email: {
    type: DataType.STRING,
    allowNull: false,
  },
  firstName: {
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
  secondName: {
    type: DataType.STRING,
    allowNull: false,
  },
};
