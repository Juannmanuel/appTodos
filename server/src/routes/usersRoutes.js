const { Router } = require(`express`)
const { getUserById, getUser, createUser, getAllUsers } = require("../handlers/usersHandlers")

const userRouter = Router()

userRouter.get("/", getAllUsers)
userRouter.post("/login", getUser)
userRouter.post("/create", createUser)

module.exports = userRouter