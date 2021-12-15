const express = require('express')
const quoteRoutes = express.Router();
const favQuotesController = require('../controllers/favQuotesController')

quoteRoutes.post('/:id', favQuotesController.createQuote)
quoteRoutes.get('/:id', favQuotesController.getQuotes)
quoteRoutes.delete('/', favQuotesController.deleteQuotes)

module.exports = quoteRoutes