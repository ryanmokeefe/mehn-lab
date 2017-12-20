<<<<<<< HEAD
const mongoose = require('./connection.js')

const NewsSchema = new mongoose.Schema({
    url: String,
    title: String,
    description: String,
    date: Number
})

const News = mongoose.model("News", "NewsSchema)
=======
const mongoose = require('./connetion')

const NewsSchema = new mongoose.Schema({
    URL: String,
    Title: String,
    Description: String,
    Date: Number
})

const News = mongoose.model('News', NewsSchema)
>>>>>>> dfc41d1ead914c33add5fa32a28704f93edebe76

module.exports = News
