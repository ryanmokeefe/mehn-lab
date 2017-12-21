const express = require("express")
const hbs = require("express-handlebars")
const news = require("./controllers/news")
const app = express()
const parser = require("body-parser")
const methodOverride = require("method-override")

/// Port:
app.set('view engine', 'hbs')
app.set('port', process.env.PORT || 4001)

app.use(methodOverride('_method'))

app.use(methodOverride('_method'))
app.engine('.hbs', hbs({
    extname: '.hbs',
    partialsDir: 'views/',
    layoutsDir: 'views/',
    defaultLayout: 'layout-main'
  }))
  
// * ORDER MATTERS! place configurations ABOVE rendering
app.use('/assets', express.static('public'))
// configure the parser to support html forms (access to the body of the request)
app.use(parser.urlencoded( { extended: true }))

// * Configs Above THIS
app.get('/', (req, res) => {
    res.render('app-welcome')
})

app.use('/news', news)

app.listen(app.get('port'), () => {
  console.log('It\'s aliiive!')
  })

console.log('working')