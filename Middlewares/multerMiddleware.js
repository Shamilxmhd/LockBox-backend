const multer = require('multer')

// storage
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        const filename = `image-${Date.now()}-${file.originalname}`
        callback(null, filename)
    }
})

// filefilter
const fileFilter = (req, file, callback) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        callback(null, true)
    } else {
        callback(null, false)    
        return callback(new Error("Please upload following extensions (png,jpg,jpeg) only"))
    }
}

// multerConfig
const multerConfig = multer({
    storage, fileFilter
})

module.exports = multerConfig