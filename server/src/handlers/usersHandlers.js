const { createUserDB, findOneUser, findAllUsers } = require("../controllers/usersController");
const {Taks} = require(`../db`)


const getUser = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) throw Error(`Faltan datos`)
    try {
        const user = await findOneUser(email)
        if (!user) throw Error(`Los datos no coinciden`)
        if (user.password !== password) throw Error(`Los datos no coinciden`)
        const taks = await Taks.findAll({where: {UserId: user.id}})
        res.status(200).json({"access": true, "IdUser": user.id, "Taks": taks})
    } catch (error) {
        res.status(200).json({"access": false ,"error": error.message})

    }
};

const createUser = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) throw Error(`Faltan datos`)
    try {
        const newUser = await createUserDB(email, password)
        const taks = await Taks.findAll({where: {UserId: newUser.id}})
        res.status(200).json({"access": true, "IdUser": newUser.id, "Taks": taks})
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