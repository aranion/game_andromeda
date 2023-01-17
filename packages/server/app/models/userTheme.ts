import { DataType, Model } from 'sequelize-typescript';
import type { ModelAttributes } from 'sequelize/types';

export interface IUserTheme {
  themeName: string;
  ownerId: number;
}
export const userThemeModel: ModelAttributes<Model, IUserTheme> = {
  themeName: {
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isIn: [['dark', 'light']],
    },
  },
  ownerId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
};
