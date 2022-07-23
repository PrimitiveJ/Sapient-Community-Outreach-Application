
const mongoose = require('mongoose');
const { events } = require('./User');

const eventSchema = new mongoose.Schema({

    author: String,
    title: String,
    description: String,
    // createdAt: {
    //     type: String,
    //     default: () => Date.now()
    // },
    image: String,
    date: String,
    time: String,
    
    location: {
        city: String,
        state: String
    },

    comments: [{
        author: String,
        content: String,
        replies: [{
            author: String,
            content: String
        }]
    }],

    sponsor: [{
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }],

    participants: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }]

}, {
    timestamps: true,
    toJSON: { 
        virtuals: true,
    }
});


module.exports = mongoose.model('Event', eventSchema);