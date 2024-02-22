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

    },
    username: {
        type: String,

    },
    email: {
        type: String,

    },
    company: {
        type: String,

    },
    phone: {
        type: String,

    },
    passportNumber: {
        type: String,

    },
    licenseNumber: {
        type: String,

    },
    address: {
        type: String,

    },
    city: {
        type: String,

    },
    state: {
        type: String,

    },
    postalCode: {
        type: String,

    },
    country: {
        type: String,

    },
    userId: {
        type: String,
        required: true
    }
})
const identities = mongoose.model('identities', identitySchema)
module.exports = identities