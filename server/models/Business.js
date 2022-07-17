const {Schema} = require("mongoose");

const businessSchema = new Schema({
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
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


module.exports = Business;
