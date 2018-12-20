import mongoose from 'mongoose'

export default new mongoose.Schema({
  description: String,
  done: Boolean,
  createdAt: Date
})
