const { Router } = require(`express`)
const mainRouter = Router()


mainRouter.get("/users", (req, res) => {
    res.status(200).send(`Ususarios`)
})
mainRouter.get("/users/:id", (req, res) => {
    res.status(200).send(`Ususario expesifico`)
})

module.exports = mainRouter