const express       = require('express')
// delete this line (replacing database with schema file): 
// const db            = require('../db/connection')
const News          = require('../db/schema')
const router        = express.Router()
///////////////
// Parses information from POST
var bodyParser = require('body-parser');
// Used to manipulate POST methods
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');


// Parses information from POST
var bodyParser = require('body-parser');
// Used to manipulate POST methods
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');
//
router.get('/', (req, res) => {
    News.find({})
      .then((news) => {
        res.render('news-index', {
          news: news
        })
      })
  })

//////////////////////////////////

/////// Restricting Access
function authenticatedUser(req, res, next) {
    // If the user is authenticated, then we continue the execution
    if (req.isAuthenticated()) return next();
  
    // Otherwise the request is always redirected to the home page
    res.redirect('/');
  }
  
  ////
  
  router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup)
  
  router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin)
  
  router.route("/logout")
  .get(usersController.getLogout)
  
  // adds route for secret page IF user is authenticated:
  router.route("/secret")
  .get(authenticatedUser, usersController.secret)
  


  //////////////////////////////

// get:
router.get('/:id', (req, res) => {
    // let news = req.params.title
    News.findOne({ id: req.params.id
    })
        .then((news) => {
            res.render('news-show', {
                news: news
        })
    })
    .catch((err) => {
        console.log(err)
    })
})
// Create new:
router.post('/', (req, res) => {
News.create(req.body.news)
    .then(news => {
    res.redirect(`/news/${news.id}`)
    })
    .catch((err) => {
      console.log(err)
    })
})

// Update:
router.put('/:title', (req, res) => {
    News.findOneAndUpdate({ name: req.params.title }, req.body.news, { new: true })
      .then(news => {
        res.redirect(`/news/${news.title}`)
      })
  })
// Delete:
router.delete('/:title', (req, res) => {
    News.findOneAndRemove({ title: req.params.title })
      .then(
        () => {
          res.redirect('/news')
        }
    )
})
module.exports = router
