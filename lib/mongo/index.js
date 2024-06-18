// mongodb.js

import { MongoClient } from 'mongodb'

process.env.MONGODB_URI = "mongodb+srv://ayaka9271:jLMeWMZFhny5C36J@react.slnhkpe.mongodb.net/random_song?retryWrites=true&w=majority&appName=react"

const uri = process.env.MONGODB_URI
const options = {
}

let client = new MongoClient(uri, options)
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV !== 'production') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  clientPromise = client.connect()
}

export default clientPromise