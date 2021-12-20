
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

const picRoute = require('./routes/pictRoute')
app.use('/pic',picRoute)

app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));

// Above line would serve all files/folders inside of the 'uploads' directory
// And make them accessible through http://localhost:yourport/uploads.

app.listen(3001, () => {
    routesReport.print()
  })


//   const PORT = process.env.PORT || 3001
// app.listen(PORT, () => {
//     console.log(`server listening on ${PORT}`);
//     routesReport.print()
//   })