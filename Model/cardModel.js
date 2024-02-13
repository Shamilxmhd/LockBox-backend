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
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    cvv: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})

const cards = mongoose.model('cards', cardScheama)
module.exports = cards