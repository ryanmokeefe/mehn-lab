<<<<<<< HEAD
<<<<<<< HEAD
const mongoose = require("mongoose")


=======


const mongoose = require('mongoose')

mongoose.connect('mongoDB://localhost/mehn-lab', {useMongoClient: true})
mongoose.Promise = Promise 
module.exports = mongoose 
>>>>>>> c9fbab698a0d9585568d354d5279667767d2057f
=======
const mongoose = require('mongoose')
>>>>>>> dfc41d1ead914c33add5fa32a28704f93edebe76

mongoose.connect('mongodb://localhost/mehn-lab', { useMongoClient: true })

mongoose.Promise = Promise

module.exports = mongoose
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> c9fbab698a0d9585568d354d5279667767d2057f
>>>>>>> dfc41d1ead914c33add5fa32a28704f93edebe76
