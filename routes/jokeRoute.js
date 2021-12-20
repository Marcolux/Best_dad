const express = require('express')
const jokeRoutes = express.Router();
const favJokesController = require('../controllers/favJokesController')

jokeRoutes.post('/:id', favJokesController.createJoke)
jokeRoutes.get('/:id', favJokesController.getJokes)
jokeRoutes.delete('/:id', favJokesController.deleteJoke)

module.exports = jokeRoutes