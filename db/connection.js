const mongoose = require('mongoose')

// { useMongoClient: true } no longer needed with mongoose v5
mongoose.connect('mongodb://localhost/mehn-lab')

mongoose.Promise = Promise

module.exports = mongoose

