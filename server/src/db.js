const { Sequelize } = require('sequelize');
require('dotenv').config();

const UsersModel = require(`../src/models/Users`)
const TaksModel = require(`../src/models/Taks`)

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, { logging: false });
UsersModel(sequelize)
TaksModel(sequelize)

const { User, Taks } = sequelize.models;

User.hasMany(Taks)
Taks.belongsTo(User)


module.exports = {
    ...sequelize.models,
    conn: sequelize
};
