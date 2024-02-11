const mongoose = require('mongoose')
const connectionString = process.env.connectionString

mongoose.connect(connectionString).then(() => {
    console.log("MongoDB connected with lbServer");
}).catch((err) => {
    console.log('connection failed', err);
})