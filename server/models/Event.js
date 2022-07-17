const {Schema} = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const eventSchema = new Schema({
    title: [
        {
            type: String
        },
    ],
    description: {
        type: String,
        required: true
    },
    createdAt: createdAt: {
        type: Date,
        default: Date.now(),
        get: (val) => formatDate(val)
    },
    eventId: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    date: {
        type: Date
    },
    location: {
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        }
    },
    organizer: {
        type: Schema.types.ObjectId,
        ref: 'User'
    },
    businessSponsor: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [Comment],
    participants: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

});

function formatDate() {
    console.log(`The current date is ${
        this.createdAt
    }`)
}

module.exports = Event;
