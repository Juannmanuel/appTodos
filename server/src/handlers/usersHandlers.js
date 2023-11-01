const { createUserDB, findOneUser, findAllUsers } = require("../controllers/usersController");


const getUser = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) throw Error(`Faltan datos`)
    try {
        const user = await findOneUser(email)
        if (!user) throw Error(`Usuario no encontrado`)
        if (user.password !== password) throw Error(`Los datos no coinciden`)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({"error": error.message})

    }
};

const createUser = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) throw Error(`Faltan datos`)
    try {
        const response = await createUserDB(email, password)
        res.status(200).json({ "usuario creado con exito": response })
    } catch (error) {
        res.status(400).json({ "error": error.message })
    }
}
const getAllUsers = async (req, res) => {
    try {
        const users = await findAllUsers()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({"error": error.message})
    }
}
module.exports = {
    getUser,
    createUser,
    getAllUsers
}