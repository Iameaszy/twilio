const mongoose = require('mongoose');

const HollisticSchema = new mongoose.Schema({
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

const Massage = mongoose.model('Hollistic', HollisticSchema);
module.exports = Massage;