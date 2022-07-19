
const {
    User,
    Event
} = require('../models');

const users = require('./users.json');
const events = require('./events.json');

module.exports = {
    plantUsers: async () => {
        await User.deleteMany({});
        await User.create(users);
    },

    plantEvents: async () => {
        await Event.deleteMany({});
        await Event.create(events);
    }
}
