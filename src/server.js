const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/test')

//model
const Film = mongoose.model('Film',{ 
  title: String,
  description: String,
  image_url:String,
  trailer_url:String
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log('App running')
})