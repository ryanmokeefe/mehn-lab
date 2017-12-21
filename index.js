const express = require("express")
const hbs = require("express-handlebars")
const news = require("./controllers/news")
const app = express()
const parser = require("body-parser")
const methodOverride = require("method-override")

/// Port:
app.set('port', process.env.PORT || 4001)
app.set('view-engine', 'hbs')

app.engine('.hbs', hbs({
    extname: '.hbs',
    partialsDir: 'views/',
    layoutsDir: 'views/',
    defaultLayout: 'layout-main'
  }))


app.get('/', (req, res) => {
    res.render('main')
})

app.listen(app.get('port'),() => {
    console.log('ayyyyyy')
})

 
