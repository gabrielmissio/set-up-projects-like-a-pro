const express = require('express')
const userController = require('../controllers/user-controller')

const router = express.Router()

router.post('/users', userController.create)
router.get('/users', userController.getAll)
router.get('/users/:id', userController.get)
router.put('/users/:id', userController.update)
router.delete('/users/:id', userController.delete)

module.exports = router
