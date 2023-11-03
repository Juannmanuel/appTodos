
const { Taks, User } = require(`../db`)


// Function to create a task
// Función para crear una tarea
const createTaks = async (req, res) => {
    const { title, description, priority, UserId } = req.body
    if (!title || !description || !priority) throw Error(`Faltan datos`)
    try {
        const newTaks = await Taks.create({ title, description, priority })
        await newTaks.setUser(UserId);
        await Taks.findOne({ where: { id: newTaks.id }, include: { model: User } })

        res.status(200).send({ "Tarea creada correctamente": newTaks })

    } catch (error) {
        console.error({ "message error": error.message })
    }
}
// Function to get all tasks by User ID
// Función para obtener todas las tareas por ID de usuario
const getAllTaks = async (req, res) => {
    const { UserId } = req.params
    try {
        const taks = await Taks.findAll({where: { UserId: UserId }})
        return res.status(200).json(taks)
    } catch (error) {
        return res.status(400).json({ "error": error.message })
    }
}
// Function to delete a task by its ID
// Función para eliminar una tarea por su ID
const deleteTaks = async (req, res) => {
    const { id } = req.params
    if (!id) throw Error(`Faltan datos obligatorios`)
    try {
        await Taks.destroy({ where: { id: id } })
        return res.status(200).json(`Taks eliminada correctamente`)
    } catch (error) {
        return res.status(400).json({ "error": error.message })
    }
}
// Function to update a task by its ID
// Función para actualizar una tarea por su ID
const updateTaks = async (req, res) => {
    const { id } = req.params
    const { title, description, priority, completed} = req.body
    try {
        const response = await Taks.update( { title, description, priority, completed }, { where: {id: id} })
        if(!response) throw Error(`No se encontró la actividad`)
        return res.status(200).send("Actividad actualizada con exito")
    } catch (error) {
        return res.status(400).json({"error": error.message})
    }
}




module.exports = {
    createTaks,
    getAllTaks,
    deleteTaks,
    updateTaks

}