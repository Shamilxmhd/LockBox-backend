const users = require('../Model/userModel')



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