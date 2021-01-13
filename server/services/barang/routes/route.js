const router = require('express').Router()
const Controller = require('../controllers/controller')

router.get('/', Controller.products)
router.post('/addProduct', Controller.addProducts)
router.put('/:id', Controller.editProducts)
router.delete('/:id', Controller.deleteProducts)

module.exports = router