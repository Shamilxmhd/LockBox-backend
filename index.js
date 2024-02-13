require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/routes')
const lbServer = express()
require('./DB/connection')




lbServer.use(cors())
// middlewear
lbServer.use(express.json())
lbServer.use(router)
lbServer.use('/uploads',express.static('./uploads'))

const PORT = 3000
lbServer.listen(PORT, () => {
    console.log(`LOCKBOX STARTED AT ${PORT}`);
})

lbServer.get('/', (req, res) => {
    res.status(200).send("<h2>LOCKBOX SERVER STARTED !!!!</h2>")
})
