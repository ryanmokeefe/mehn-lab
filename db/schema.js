
const mongoose = require('./connection')

const NewsSchema = new mongoose.Schema({

  url: String,
  title: String,
  description: String,
})

const News = mongoose.model('News', NewsSchema)

module.exports = News
