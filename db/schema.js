const mongoose = require('./connection.js')

const NewsSchema = new mongoose.Schema({
    url: String,
    title: String,
    description: String,
    date: Number
})

const News = mongoose.model("News", "NewsSchema)

module.exports = News
