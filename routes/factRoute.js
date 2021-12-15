const express = require('express')
const factRoutes = express.Router();
const favFactsController = require('../controllers/favFactsController')

factRoutes.post('/:id', favFactsController.createFact)
factRoutes.get('/:id', favFactsController.getFacts)
factRoutes.delete('/', favFactsController.deleteFacts)

module.exports = factRoutes