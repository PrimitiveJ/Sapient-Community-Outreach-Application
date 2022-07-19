
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sapient', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;

