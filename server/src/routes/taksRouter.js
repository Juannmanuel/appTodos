const { Router } = require(`express`)
const { allTaks, detailTaks } = require("../handlers/taksHandlers")

const taksRouter = Router()

taksRouter.get("/", allTaks)
taksRouter.get("/:id", detailTaks)


module.exports = taksRouter