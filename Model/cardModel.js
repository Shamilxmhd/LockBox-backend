const mongoose = require("mongoose");

const cardScheama = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    cardholderName: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String

    },
    month: {
        type: String

    },
    year: {
        type: String
    },
    cvv: {
        type: String

    },
    userId: {
        type: String,
        required: true
    }
})

const cards = mongoose.model('cards', cardScheama)
module.exports = cards