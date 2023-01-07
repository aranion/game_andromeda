import { DataType, Model } from 'sequelize-typescript';
import type { ModelAttributes } from 'sequelize/types';

export interface ISiteTheme {
  id: number;
  themeName: string;
}

export const siteThemeModel: ModelAttributes<Model, ISiteTheme> = {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  themeName: {
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  },
};
