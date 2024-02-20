const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')
const cardController = require('../Controllers/cardController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')
const identityController = require('../Controllers/identityController')

// register
router.post('/register', userController.register)
// login
router.post('/login', userController.login)

// addCard
router.post('/add-card', jwtMiddleware, cardController.addCards)

// get user cards
router.get('/user-cards', jwtMiddleware, cardController.getUserCards)

// edit card
router.put('/card/edit/:cid', jwtMiddleware, cardController.editCard)

// delete card
router.delete('/card/remove/:cid', jwtMiddleware, cardController.removeCard)

// addIdentity
router.post('/add-identity', jwtMiddleware, identityController.addIdentities)

// get user identities
router.get('/user-identities', jwtMiddleware, identityController.getUserIdentities)

// edit identity
router.put('/identity/edit/:iid', jwtMiddleware, identityController.editIdentity)

// delete identity
router.delete('/identity/remove/:iid', jwtMiddleware, identityController.removeIdentity)



module.exports = router