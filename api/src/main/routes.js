const express = require('express')
const userController = require('../presentation/controllers/user-controller')

const router = express.Router()

router.post('/users', userController.create)
router.get('/users', userController.getAll)
router.get('/users/:id', userController.get)

module.exports = router
