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

// Root API (ping)
app.get('/', (request, response) => {
  const a = { x: 1 }
  const b = { ...a, y: 2 }
  response.send({ b })
  // { message: 'k8s-minikube-poc REST Api Service' }
})

// // API Router
// app.use('/token', require('./routes/token'))
// app.use('/score', require('./routes/score'))

// Start Listening
const port = 3000

app.listen(port, () => {
  //TODO: test logger
  //   winston.info('Express: 3000')
  console.log('[REST API] Listening on port:', port)
})
