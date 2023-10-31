
const allTaks = (req, res) => {
    res.status(200).send(`Todas las tareas`)
}
const detailTaks = (req, res) => {
    res.status(200).send(`Tarea espesifica`)
}

module.exports = {
    allTaks,
    detailTaks
}