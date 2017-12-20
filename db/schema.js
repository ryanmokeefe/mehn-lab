const mongoose = require('./connetion')

const NewsSchema = new mongoose.Schema({
    URL: String,
    Title: String,
    Description: String,
    Date: Number
})

const News = mongoose.model('News', NewsSchema)

module.exports = News
