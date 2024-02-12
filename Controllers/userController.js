const users = require('../Model/userModel')
const jwt = require('jsonwebtoken');


// register
exports.register = async (req, res) => {
    const { username, email, password } = req.body
    console.log('Inside register request');
    // email already exists
    try {
        const existingUser = await users.findOne({ email })
        console.log(existingUser);
        if (existingUser) {
            res.status(406).json('User already exist.Please login')
        } else {
            // add to DB
            const newUser = users({
                username, email, password, profile: ''
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

// login
exports.login = async (req, res) => {
    const { email, password } = req.body
    console.log('Inside login request');
    try {
        const existingUser = await users.findOne({ email, password })
        console.log(existingUser);
        if (existingUser) {
            // generate token
            const token = jwt.sign({ userId: existingUser._id }, process.env.jwt_secret)
            res.status(200).json({ existingUser, token })
            console.log(existingUser);
            console.log(token);
        } else {
            res.status(406).json('invalid email')
        }
    } catch (err) {
        res.status(401).json(err)
    }
}