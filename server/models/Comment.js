const {Schema, model} = require('mongoose');

// Reaction Schema for use within the Thought Model.
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        get: (val) => formatDate(val)
        // Use getter method to format timestamp on query.
    }
}, {
    toJSON: {
        getters: true
    },
    id: false
})

// Comment schema defining the thought model
const commentSchema = new Schema({
    commentText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 180
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        get: (val) => formatDate(val)
        // Use a getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true,
        // User that creates the "thought"
    },
    reactions: [reactionSchema]
},
// Schema Settings
    {
    toJSON: {
        getters: true,
        virtuals: true
    },
    id: false
})

// Get Method for Date for Thought
function formatDate() {
    console.log(`The current date is ${
        this.createdAt
    }`)
}

// Virtual for reaction count
commentSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
});


const Comment = model('Comment', commentSchema);

module.exports = Comment;
