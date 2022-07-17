const {Schema} = require("mongoose");

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
    registeredAt: {
        type: Date,
        default: Date.now(),
        get: (val) => formatDate(val)
    }
})

function formatDate() {
    console.log(`The current date is ${
        this.createdAt
    }`)
}

module.exports = Organizer;
