const { DataTypes } = require("sequelize")
// Defining the Task model schema using Sequelize
// Definiendo el esquema del modelo de Tarea utilizando Sequelize


// Setting up the structure and data types for the Task model
// Estableciendo la estructura y los tipos de datos para el modelo de Tarea
module.exports = (sequelize) => {
    sequelize.define(`Taks`, {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        priority: {
            type: DataTypes.ENUM("Urgent", "Important", "Regular")
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false

        }
    },  { timestamps: false })
}