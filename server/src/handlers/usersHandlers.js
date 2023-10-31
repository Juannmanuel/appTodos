const users = require(`../data/users`)

const getUser = (req, res) => {
    res.status(200).send(users)
};

const getUserById = (req, res) => {
    res.status(200).send(`Detalles del usuario`)
}

module.exports = {
    getUser,
    getUserById
}