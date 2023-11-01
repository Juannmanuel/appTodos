
const { Taks, User } = require(`../db`)



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

const getAllTaks = async (req, res) => {
    try {
        const taks = await Taks.findAll()
        return res.status(200).json(taks)
    } catch (error) {
        return res.status(400).json({ "error": error.message })
    }
}
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
const updateTaks = async (req, res) => {
    const { id } = req.params
    const { title, description, priority} = req.body
    try {
        const response = await Taks.update( { title, description, priority }, { where: {id: id} })
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