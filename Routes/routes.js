const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')
const cardController = require ('../Controllers/cardController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require ('../Middlewares/multerMiddleware')

// register
router.post('/register', userController.register)
// login
router.post('/login',userController.login)

// addCard
router.post('/add-card',jwtMiddleware,cardController.addCards)

// get user cards
router.get('/user-cards',jwtMiddleware,cardController.getUserCards)

// edit card
router.put('/card/edit/:cid',jwtMiddleware,cardController.editCard)





module.exports = router