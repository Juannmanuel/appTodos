const { Router } = require(`express`)
const { getUserById, getUser, createUser } = require("../handlers/usersHandlers")

const userRouter = Router()

userRouter.get("/", getUser)
userRouter.post("/create", createUser)

module.exports = userRouter