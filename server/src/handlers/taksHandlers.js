
const { createTaksDB } = require("../controllers/taksControllers");
const { Taks, Users } = require(`../db`)



const createTaks = async (req, res) => {
    const { title, description, priority, UserId } = req.body
    if (!title || !description || !priority) throw Error(`Faltan datos`)
    try {
        const response = await createTaksDB(title, description, priority, UserId)

        res.status(200).send({ "Tarea creada correctamente": response })
    } catch (error) {
        console.error({ "message error": error.message })
    }
}




module.exports = {
    createTaks,

}