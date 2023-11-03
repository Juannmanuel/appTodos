const { Router } = require(`express`)
const userRouter = require("./usersRoutes")
const taksRouter = require("./taksRouter")
const mainRouter = Router()

mainRouter.use("/user", userRouter)

mainRouter.use("/taks", taksRouter)

//Este código establece un archivo principal de enrutamiento (mainRouter) que actúa como un enrutador 
// principal para gestionar las rutas relacionadas con usuarios y tareas. Importa dos módulos de rutas,
// uno para las operaciones relacionadas con usuarios y otro para las operaciones relacionadas con tareas.
// Luego, usa el método use de Express para direccionar las solicitudes a rutas específicas para usuarios
// y tareas. Este enfoque modular ayuda a organizar y estructurar las rutas de manera separada, facilitando
// el mantenimiento y la comprensión del código.







module.exports = mainRouter