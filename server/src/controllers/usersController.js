const {User} = require(`../db`);

const createUserDB =  async (email, password) => {
    const newUser = await User.create({email, password})
    return newUser
}
const findOneUser = async (email) => {
    const user = await User.findOne({where: { email: email}})
    return user
}
const findAllUsers = async () => {
    const users = await User.findAll()
    return users

}
module.exports = {createUserDB, findOneUser, findAllUsers}