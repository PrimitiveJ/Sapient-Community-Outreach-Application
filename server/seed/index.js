
const {
    User,
    Event
} = require('../models');

const users = require('./users.json');
const events = require('./events.json');

const plantUsers = async () => {
    await User.deleteMany({});
    await User.create(users);
}

const plantEvents = async () => {
    await Event.deleteMany({});
    await Event.create(events);
}

(async () => {
    await plantEvents();
    await plantUsers();
    console.log('seeded database');
})();