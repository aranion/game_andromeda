import { DataType, Model } from 'sequelize-typescript';
import type { ModelAttributes } from 'sequelize/types';

export interface IUserTheme {
  id: number;
  themeId: number;
  ownerId: number;
}
export const userThemeModel: ModelAttributes<Model, IUserTheme> = {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  themeId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  ownerId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
};
