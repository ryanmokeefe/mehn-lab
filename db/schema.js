<<<<<<< HEAD
const mongoose = require('./connection')

const NewsSchema = new mongoose.Schema({

  url: String,
  title: String,
  description: String,
  date: Number



})

const News = mongoose.model('CaptialNews','NewsSchema')
module.exports = News
=======
const mongoose = require('./connetion')

const NewsSchema = new mongoose.Schema({
    URL: String,
    Title: String,
    Description: String,
    Date: Number
})

const News = mongoose.model('News', NewsSchema)

module.exports = News
>>>>>>> dfc41d1ead914c33add5fa32a28704f93edebe76
