const {Schema} = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const organizerSchema = new Schema({
    city: {
        type: String
    },
    state: {
        type: String
    },
    createdEvents: [
        {
            type: Schema.Types.ObjectId,
            ref: 'eventSchema'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
      },
},{
    toJSON: {
        getters: true
    },
    id: false
})



module.exports = Organizer;
