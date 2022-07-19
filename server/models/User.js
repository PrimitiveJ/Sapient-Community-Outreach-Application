

const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({

    username: String,
    email: String,
    password: String,

    createdEvents: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Event'
    }],

    joinedEvents: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Event'
    }],

});

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});
  
userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};
  

module.exports = mongoose.model('User', userSchema);

