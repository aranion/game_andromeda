import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { userThemeModel } from '../models/userTheme';
import { forumModel } from '../models/forum';
import { topicModel } from '../models/topic';
import { commentModel } from '../models/comment';

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } =
  process.env;

const sequelizeOptions: SequelizeOptions = {
  host: 'postgres',
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  port: Number(POSTGRES_PORT),
  dialect: 'postgres',
  ssl: false,
  dialectOptions: {},
};

// Создаем инстанс Sequelize
export const sequelize = new Sequelize(sequelizeOptions);

// Инициализируем модели
export const UserTheme = sequelize.define('UserTheme', userThemeModel, {});
export const Forum = sequelize.define('Forum', forumModel, {});
export const Topic = sequelize.define('Topic', topicModel, {});
export const Comment = sequelize.define('Comment', commentModel, {});

Forum.hasMany(Topic, {
  foreignKey: 'forumId',
});
Topic.belongsTo(Forum, {
  foreignKey: 'forumId',
});

Forum.hasMany(Comment, {
  foreignKey: 'forumId',
});
Comment.belongsTo(Forum, {
  foreignKey: 'forumId',
});

Topic.hasMany(Comment, {
  foreignKey: 'topicId',
});
Comment.belongsTo(Topic, {
  foreignKey: 'topicId',
});
