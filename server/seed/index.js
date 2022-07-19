
const {
    User
} = require('../models');

const users = require('./users.json');

module.exports = {
    plantUsers: async () => {
        await User.deleteMany({});
        await User.create(users);
    }
}
