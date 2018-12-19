import express from 'express'
// const bodyParser = require('body-parser')

// Init
const app = express()

// Middlewares

// app.use(bodyParser.json())
app.use((request, response, next) => {
  response.setHeader('Content-Type', 'application/json')
  next()
})

// Root API
app.get('/', (request, response) => response.send({ message: 'k8s-minikube-poc REST Api Service' }))

// // API Router
// app.use('/token', require('./routes/token'))
// app.use('/score', require('./routes/score'))

// Listening
const port = 3000
app.listen(port, () => console.log('[REST API] Listening on port:', port))
