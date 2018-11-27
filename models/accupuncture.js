const mongoose = require('mongoose');

const AccupunctureSchema = new mongoose.Schema({
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

const Accupuncture = mongoose.model('Accupunctures', AccupunctureSchema);
module.exports = Accupuncture;