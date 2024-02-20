const mongoose = require('mongoose')

const identitySchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    passportNumber: {
        type: String,
        required: true
    },
    licenseNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})
const identities = mongoose.model('identities', identitySchema)
module.exports = identities