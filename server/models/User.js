const {Schema, model} = require("mongoose");
const bcrypt = require("bcrypt");

// import schema from Book.js
const Event = require("./Event");
const organizerSchema = require("./Organizer");
const businessSchema = require("./Business");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Must use a valid email address"]
    },
    password: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    // Events that a user has signed up to participate in.
    savedEvents: [{
      type: Schema.Types.ObjectId,
      ref: "Event"
    }],
     businessSponsor : [businessSchema], organizer : [organizerSchema], comments : [
    {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }
], createdAt : createdAt : {
    type: Date,
    default: Date.now(),
    get: (val) => formatDate(val)
},
}

// set this to use virtual below
    {
    toJSON: {
        virtuals: true
    }
});

// hash user password
userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `savedCount` with the number of saved books we have
userSchema.virtual("eventCount").get(function () {
    return this.savedEvents.length;
});

function formatDate() {
    console.log(`The current date is ${
        this.createdAt
    }`)
}


const User = model("User", userSchema);

module.exports = User;
