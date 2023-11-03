const { User, Taks } = require(`../db`);

// Function to create a user in the database
// Función para crear un usuario en la base de datos
const createUserDB = async (email, password) => {
    const newUser = await User.create({ email, password })
    return newUser
}
// Function to find a user by email, including their associated tasks
// Función para encontrar un usuario por correo electrónico, incluyendo sus tareas asociadas
const findOneUser = async (email) => {
    const user = await User.findOne({
        where: { email: email }, include: {
            model: Taks,
        }
    })
    return user
}
// Function to retrieve all users from the database
// Función para obtener todos los usuarios de la base de datos que no sé por que la hice cuando arranque acá, pero no la quiero borrar por si se rompe algo de otro archivo
const findAllUsers = async () => {
    const users = await User.findAll()
    return users

}
module.exports = { createUserDB, findOneUser, findAllUsers }