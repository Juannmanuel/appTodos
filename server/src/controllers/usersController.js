const {User, Taks} = require(`../db`);

const createUserDB =  async (email, password) => {
    const newUser = await User.create({email, password})
    return newUser
}
const findOneUser = async (email) => {
    const user = await User.findOne({where: { email: email}, include : {
        model: Taks,
    }})
    return user
}
const findAllUsers = async () => {
    const users = await User.findAll()
    return users

}
module.exports = {createUserDB, findOneUser, findAllUsers}