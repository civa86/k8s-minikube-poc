import express from 'express'
import mongoose from 'mongoose'

const router = express.Router()

router.get('/', async (request, response) => {
  const Todo = mongoose.model('Todo')
  try {
    const todos = await Todo.find().exec()
    response.send(todos)
  } catch (error) {
    response.status(500).send({ error })
  }
})

router.post('/', async (request, response) => {
  const Todo = mongoose.model('Todo')
  const body = request.body
  try {
    const element = new Todo({ description: body.description, done: false, createdAt: new Date() })
    await element.save()
    response.send(element)
  } catch (error) {
    response.status(500).send({ error })
  }
})

router.put('/done/:id', async (request, response) => {
  const Todo = mongoose.model('Todo')
  try {
    const element = await Todo.findOneAndUpdate({ _id: request.params.id }, { done: true }, { new: true })
    response.send(element)
  } catch (error) {
    response.status(500).send({ error })
  }
})

router.delete('/:id', async (request, response) => {
  const Todo = mongoose.model('Todo')
  try {
    const element = await Todo.findOneAndDelete({ _id: request.params.id })
    response.send(element)
  } catch (error) {
    response.status(500).send({ error })
  }
})

export default router
