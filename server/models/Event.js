const {Schema, model} = require("mongoose");
const dateFormat = require('../utils/dateFormat');

//MODEL
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
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
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
    organizer: [{
        type: Schema.types.ObjectId,
        ref: 'User'
    }],
    businessSponsor: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [Comment],
    participants: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]

});

function formatDate() {
    console.log(`The current date is ${
        this.createdAt
    }`)
}

module.exports = model("Event", eventSchema);
