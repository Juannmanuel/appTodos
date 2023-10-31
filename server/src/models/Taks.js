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
        }
    },  { timestamps: false })
}