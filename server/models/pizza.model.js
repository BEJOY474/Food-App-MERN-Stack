const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    variants: [],
    prices: [],

    category: {
        type: String,
        require: true
    },

    image: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    },
    createOn: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps : true
})

exports.Pizza = mongoose.model('pizzas', pizzaSchema)