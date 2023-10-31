const { Router } = require(`express`)
const { allTaks, createTaks, updateTaks } = require("../handlers/taksHandlers")

const taksRouter = Router()

taksRouter.get("/", allTaks)
taksRouter.post("/post", createTaks)
taksRouter.put(`/update`, updateTaks )


module.exports = taksRouter