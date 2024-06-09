const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
const port = 3000

//model
const Film = mongoose.model('Film', {
  title: String,
  description: String,
  image_url: String,
  trailer_url: String
})

app.post('/', async (req, res) => {

  const film = new Film({
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.image_url
  })
  
  await film.save()
  res.send(film)
})

app.delete('/:id', async (req, res) =>{
  const film = await Film.findByIdAndDelete(req.params.id)
  res.send(film)
})

app.get('/', async (req, res) => {
  const films = await Film.find()
  res.send(films)
})

app.listen(port, () => {
  console.log('App running')
  mongoose.connect('mongodb://127.0.0.1:27017/movies')
})