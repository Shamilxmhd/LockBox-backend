const jwt = require('jsonwebtoken')

// jwtMiddleware
const jwtMiddleware = (req, res, next) => {
    console.log("Inside JWT Middleware");

    try {
        const token = req.headers['authorization'].split(" ")[1]
        console.log(token);
        if (token) {
            const jwtresponse = jwt.verify(token, process.env.jwt_secret)
            req.payload = jwtresponse.userId
            next()
        } else {
            res.status(401).json("Please Provide Token!!!")
        }
    } catch {
        res.status(403).json("Please Login!!!")
    }
}

module.exports = jwtMiddleware  