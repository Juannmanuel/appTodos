const { Router } = require(`express`)
const { allTaks, createTaks, updateTaks } = require("../handlers/taksHandlers")

const taksRouter = Router()

taksRouter.get("/")
taksRouter.post("/post", createTaks)
taksRouter.put(`/update`)


module.exports = taksRouter