const { Router } = require(`express`)
const { getUser, createUser, getAllUsers } = require("../handlers/usersHandlers")

const userRouter = Router()
// Setting up routes for getting all users, creating a new user, and logging in
// Configurando las rutas para obtener todos los usuarios, crear un nuevo usuario e iniciar sesión
userRouter.get("/", getAllUsers)
userRouter.post("/login", getUser)
userRouter.post("/signin", createUser)

module.exports = userRouter