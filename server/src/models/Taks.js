const { DataTypes } = require("sequelize")

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