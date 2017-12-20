const mongoose = require('./connection')

const NewsSchema = new mongoose.Schema({

  url: String,
  title: String,
  description: String,
  date: Number



})

const News = mongoose.model('CaptialNews','NewsSchema')
module.exports = News