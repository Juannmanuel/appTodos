const { Router } = require(`express`)
const { getAllTaks, createTaks, deleteTaks, updateTaks } = require("../handlers/taksHandlers")

const taksRouter = Router()
// Setting up routes to handle tasks related requests
// Configurando rutas para manejar las peticiones relacionadas con las tareas
taksRouter.get("/:UserId", getAllTaks)
taksRouter.post("/create", createTaks)
taksRouter.put(`/update/:id`, updateTaks)
taksRouter.delete(`/delete/:id`, deleteTaks)


module.exports = taksRouter