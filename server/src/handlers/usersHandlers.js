
const getUser = (req, res) => {
    res.status(200).send(`Todos los usuarios`)
};

const getUserById = (req, res) => {
    res.status(200).send(`Detalles del usuario`)
}

module.exports = {
    getUser,
    getUserById
}