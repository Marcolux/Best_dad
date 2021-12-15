const express = require('express')
const app = express()

const routesReport = require('rowdy-logger').begin(app)

app.use(require('morgan')('tiny'))
app.use(require('cors')())
app.use(express.json())

//routes
const userRoute = require('./routes/userRoute')
app.use('/user', userRoute)

const factRoute = require('./routes/factRoute')
app.use('/facts', factRoute)

const jokeRoute = require('./routes/jokeRoute')
app.use('/jokes', jokeRoute)

const quoteRoute = require('./routes/quoteRoute')
app.use('/quotes',quoteRoute)

app.listen(3001, () => {
    routesReport.print()
  })