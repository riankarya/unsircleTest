const router = require('express').Router()
const users = require('./routeUser')
const permissions = require('./routePermissions')
const products = require('./routeProducts')
const ControllerApp = require('../controllers/controllerApp')

router.get('/', ControllerApp.allMoviesSeries)
router.use('/users', users)
router.use('/permissions', permissions)
router.use('/products', series)

module.exports = router