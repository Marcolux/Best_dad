const express = require('express')
const userRoutes = express.Router();
const userController = require('../controllers/userController')

userRoutes.post('/', userController.createUser)
userRoutes.post('/login', userController.login)
userRoutes.get('/verify', userController.verifyUser)
userRoutes.delete('/:id', userController.deleteUser)
userRoutes.put('/:id', userController.updateUser)


module.exports = userRoutes