const {Schema, model} = require("mongoose");
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');

// MODEL
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
        },
        zip: {
            type: String,
            required: true
        }
    },
    organizer: [
        {
            type: Schema.types.ObjectId,
            ref: 'User',
            required: true
        }
    ],
    businessSponsor: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    comments: [
        {
            commentText: {
                type: String,
                required: 'You need to leave a comment!',
                minLength: 1,
                maxLength: 180
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: timestamp => dateFormat(timestamp)
            },
            username: {
                type: String,
                required: true,
                // User that creates the "comment"
            },
            reactions: [
                {
                    reactionBody: {
                        type: String,
                        required: true,
                        maxlength: 280
                    },
                    username: {
                        type: String,
                        required: true
                    },
                    createdAt: {
                        type: Date,
                        default: Date.now,
                        get: timestamp => dateFormat(timestamp)
                    }
                }
            ]
        }
    ],
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]

});

function formatDate() {
    console.log(`The current date is ${
        this.createdAt
    }`)
}

module.exports = model("Event", eventSchema);
