const { Router } = require(`express`)
const { getUserById, getUser } = require("../handlers/usersHandlers")

const userRouter = Router()

userRouter.get("/", getUser)
userRouter.get("/:id", getUserById)

module.exports = userRouter