//creamos la instancia de express
const express = require("express")
const morgan = require("morgan")
const mainRouter = require("./routes")
//ejecutamos express para el servidor
const app = express()
const cors = require('cors');


app.use(cors())
app.use(morgan("dev"))
app.use(express.json());

app.use(mainRouter)

module.exports = app