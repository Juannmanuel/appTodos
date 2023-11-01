const {Taks} = require(`../db`)

const createTaksDB = async (title, description, priority, UserId) => {
    const newTaks = Taks.create({title, description, priority, UserId})
    return newTaks
}

module.exports = {
    createTaksDB
}