const mongoose = require('mongoose');

const NaturopathSchema = new mongoose.Schema({
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

const Naturopath = mongoose.model('Naturopaths', NaturopathSchema);
module.exports = Naturopath;