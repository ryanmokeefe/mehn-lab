<<<<<<< HEAD


const mongoose = require('mongoose')

mongoose.connect('mongoDB://localhost/mehn-lab', {useMongoClient: true})
mongoose.Promise = Promise 
module.exports = mongoose 
=======
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mehn-lab', { useMongoClient: true })

mongoose.Promise = Promise

module.exports = mongoose
>>>>>>> dfc41d1ead914c33add5fa32a28704f93edebe76
