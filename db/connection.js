const mongoose = require('mongoose')

// { useMongoClient: true } no longer needed with mongoose v5
mongoose.connect('mongodb://localhost/mehn-lab, { useMongoClient: true }')

mongoose.Promise = Promise

module.exports = mongoose

