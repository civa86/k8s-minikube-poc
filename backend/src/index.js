import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import config from './config'
import todo from './routes/todo'
import Todo from './models/Todo'

// Database
mongoose.connect(config.DB_URL)
const db = mongoose.connection

db.on('error', () => {
  console.error('Database Connection Error')
  process.exit(1)
})
db.once('open', () => {
  // DB Models
  mongoose.model('Todo', Todo)

  // Init
  const app = express()

  // Middlewares
  app.use(bodyParser.json())
  app.use((request, response, next) => {
    response.setHeader('Content-Type', 'application/json')
    next()
  })

  // Root API
  app.get('/', (request, response) => response.send({ message: 'k8s-minikube-poc REST Api Service' }))
  // API Routes
  app.use('/todo', todo)

  // Listener
  const port = 3000
  app.listen(port, () => console.log('[REST API] Listening on port:', port))
})
