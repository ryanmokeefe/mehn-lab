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
  
// * ORDER MATTERS! place configurations ABOVE rendering
app.use('/assets', express.static('public'))
app.use(methodOverride('_method'))
// configure the parser to support html forms (access to the body of the request)
app.use(parser.urlencoded( { extended: true }))



<<<<<<< HEAD
app.listen(app.get('port'),() => {
    console.log('ayyyyyy LMAO')
=======
// * Configs Above THIS
app.get('/', (req, res) => {
<<<<<<< HEAD
    app.render('app-welcome')
>>>>>>> aeadf3510a0e58d47de2b9372788b321f538a8aa
=======
    app.render('layout-main')
>>>>>>> c0bf534b1f1b29a7b022f74309ffc999d98d6e17
})

app.listen(app.get('port'), () => {
    console.log('It\'s aliiive!')
  })

<<<<<<< HEAD

=======
>>>>>>> aeadf3510a0e58d47de2b9372788b321f538a8aa
console.log('working')