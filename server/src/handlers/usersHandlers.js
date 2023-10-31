const { createUserDB } = require("../controllers/usersController");
const users = require(`../data/users`)

const getUser = (req, res) => {
    res.status(200).send(users)
};

const createUser = async (req, res) => {
    const {email, password} = req.body
    if(!email || !password) throw Error(`Faltan datos`)
    try {
        const response = await createUserDB(email, password)
        res.status(200).json({"usuario creado con exito": response})
    } catch (error) {
        res.status(400).json({"error": error.message})
    }
}

module.exports = {
    getUser,
    createUser
}