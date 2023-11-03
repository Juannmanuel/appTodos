const server = require("./src/app")
const { conn } = require(`./src/db`)


const PORT = 3001;
// Starting the server on port 3001
// Iniciando el servidor en el puerto 3001
server.listen(PORT, () => {
    conn.sync({ force: false })
    // Importing server configuration and database connection
    // Importando configuración del servidor y conexión a la base de datos
    console.log(`Listening on port ${PORT}`);
})