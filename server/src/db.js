const { Sequelize } = require('sequelize');
require('dotenv').config();
// Importing User and Task models
// Importando modelos de Usuario y Tarea
const UsersModel = require(`../src/models/Users`)
const TaksModel = require(`../src/models/Taks`)
// Loading environment variables from .env file
// Cargando variables de entorno desde el archivo .env
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
// Establishing the database connection using Sequelize
// Estableciendo la conexión a la base de datos usando Sequelize
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, { logging: false });
UsersModel(sequelize)
TaksModel(sequelize)

const { User, Taks } = sequelize.models;


// Associating the User and Task models to set up a one-to-many relationship
// Asociando los modelos de Usuario y Tarea para establecer una relación uno a muchos

User.hasMany(Taks)
Taks.belongsTo(User)


module.exports = {
    ...sequelize.models,
    conn: sequelize
};
