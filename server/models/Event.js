
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({

    author: String,
    title: String,
    description: String,
    createdAt: Date,

    location: {
        city: String,
        state: String
    },

    comments: [{
        title: String,
        content: String,
        replies: [{
            title: String,
            content: String
        }]
    }],

    participants: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }]

});

module.exports = mongoose.model('Event', eventSchema);