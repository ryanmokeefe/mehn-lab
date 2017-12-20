const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mehn-lab', { useMongoClient: true })

mongoose.Promise = Promise

module.exports = mongoose
