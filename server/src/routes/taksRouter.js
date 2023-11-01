const { Router } = require(`express`)
const { getAllTaks, createTaks, deleteTaks, updateTaks } = require("../handlers/taksHandlers")

const taksRouter = Router()

taksRouter.get("/", getAllTaks)
taksRouter.post("/create", createTaks)
taksRouter.put(`/update/:id`, updateTaks)
taksRouter.delete(`/delete/:id`, deleteTaks)


module.exports = taksRouter