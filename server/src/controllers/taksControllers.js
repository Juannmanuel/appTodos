const {Taks} = require(`../db`)

const createTaksDB = async (title, description, priority) => {
    const newTaks = Taks.create({title, description, priority})
    return newTaks
}

module.exports = {
    createTaksDB
}