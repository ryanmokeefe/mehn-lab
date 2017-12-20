

const mongoose = require('mongoose')

mongoose.connect('mongoDB://localhost/mehn-lab', {useMongoClient: true})
mongoose.Promise = Promise 
module.exports = mongoose 