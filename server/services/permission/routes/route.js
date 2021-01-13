const router = require('express').Router()
const Controller = require('../controllers/controller')


router.get('/', Controller.checkPermissions)
router.post('/addPermission', Controller.addPermissions)

module.exports = router