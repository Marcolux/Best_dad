const express = require('express')
const jokeRoutes = express.Router();
const favJokesController = require('../controllers/favJokesController')

jokeRoutes.post('/:id', favJokesController.createJoke)
jokeRoutes.get('/:id', favJokesController.getJokes)
jokeRoutes.delete('/', favJokesController.deleteJoke)

module.exports = jokeRoutes