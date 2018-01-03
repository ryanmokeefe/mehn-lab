const express       = require('express')
// delete this line (replacing database with schema file): 
// const db            = require('../db/connection')
const News          = require('../db/schema')
const router        = express.Router()

//
router.get('/', (req, res) => {
    News.find({})
      .then((news) => {
        res.render('news-index', {
          news: news
        })
      })
  })



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
