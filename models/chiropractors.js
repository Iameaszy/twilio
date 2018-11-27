const mongoose = require('mongoose');

const ChiropractorsSchema = new mongoose.Schema({
    first_number: {
        type: String,
        alias: 'B'
    },
    name: {
        type: String,
        alias: 'A'
    },
    second_number: {
        type: String,
        alias: 'C'
    },
    subscribed: {
        type: Boolean,
        default: true,
    },
});

const Chiropractors = mongoose.model('Chiropractors', ChiropractorsSchema);
module.exports = Chiropractors;