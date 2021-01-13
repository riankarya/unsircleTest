const router = require('express').Router()
const Controller = require('../controllers/controller')

router.post('/register', Controller.registerUser)
router.post('/login', Controller.loginUser)

module.exports = router