const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
      },
}, {
    toJSON: {
        getters: true
    },
})

// Comment schema defining the thought model
const commentSchema = new Schema({
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

// Virtual for reaction count
commentSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
});


const Comment = model('Comment', commentSchema);

module.exports = Comment;
