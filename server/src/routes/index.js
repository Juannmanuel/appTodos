const { Router } = require(`express`)
const userRouter = require("./usersRoutes")
const taksRouter = require("./taksRouter")
const mainRouter = Router()

mainRouter.use("/user", userRouter)

mainRouter.use("/taks", taksRouter)


module.exports = mainRouter