
const taks = require(`../data/taks`)
function generateID() {
    return String(Math.random()).replace('.', '').slice(0, 10);
}

const allTaks = (req, res) => {
    res.status(200).send(taks)
}
const createTaks = (req, res) => {
    const { title, description, priority } = req.body
    if (!title || !description || !priority) throw Error(`Faltan datos`)
    try {
        const newTaks = { title, description, priority, id: generateID() }
        taks.push(newTaks)
        res.status(200).send({ "Tarea creada correctamente": taks })
    } catch (error) {
        console.error({ "message error": error.message })
    }
}
const updateTaks = (req, res) => {
    const { title, description, priority, id } = req.body;

    if (!id || !title || !description || !priority) {
        return res.status(400).send('Faltan datos');
    }

    const existingTaskIndex = taks.findIndex(item => item.id === id);

    if (existingTaskIndex === -1) {
        return res.status(404).send('Tarea no encontrada');
    }

    try {
        taks[existingTaskIndex] = {
            id,
            title,
            description,
            priority
        };

        res.status(200).send('Tarea actualizada correctamente');
    } catch (error) {
        console.error({ "message": error.message });
        res.status(500).send('Error al actualizar la tarea');
    }
};



module.exports = {
    allTaks,
    createTaks,
    updateTaks
}