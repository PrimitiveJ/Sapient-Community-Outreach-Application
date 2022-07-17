const {Schema} = require("mongoose");
const dateFormat = require('../utils/dateFormat');

// SUBDOC
const businessSchema = new Schema({
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    }
}, {
    toJSON: {
        getters: true
    }
})


module.exports = Business;
