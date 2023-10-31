const {User} = require(`../db`);

const createUserDB =  async (email, password) => {
    const newUser = await User.create({email, password})
    return newUser
}

module.exports = {createUserDB}