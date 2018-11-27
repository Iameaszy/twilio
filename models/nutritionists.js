const mongoose = require('mongoose');

const NutritionistSchema = new mongoose.Schema({
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

const Nutritionist = mongoose.model('Nutritionists', NutritionistSchema);
module.exports = Nutritionist;