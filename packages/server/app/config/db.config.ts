import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { userThemeModel } from '../models/userTheme';
import { topicModel } from '../models/topic';
import { commentModel } from '../models/comment';

const sequelizeOptions: SequelizeOptions = {
  host: 'postgres',
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: Number(process.env.POSTGRES_PORT || 5432),
  dialect: 'postgres',
  ssl: false,
  dialectOptions: {},
};

console.log('>>>DEBUG<<<', sequelizeOptions);

// Создаем инстанс Sequelize
export const sequelize = new Sequelize(sequelizeOptions);

// Инициализируем модели
export const UserTheme = sequelize.define('UserTheme', userThemeModel, {});
export const Topic = sequelize.define('Topic', topicModel, {});
export const Comment = sequelize.define('Comment', commentModel, {});

Topic.hasMany(Comment, {
  foreignKey: 'topicId',
});
Comment.belongsTo(Topic, {
  foreignKey: 'topicId',
});
