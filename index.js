const express = require("express")
const hbs = require("express-handlebars")
const news = require("./controllers/news")
const app = express()
const parser = require("body-parser")
const methodOverride = require("method-override")

// require all passport dependencies:
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

app.use(morgan('dev')); 
app.use(cookieParser());
app.use(parser()); 

// uses session ENCRYPTION
app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

require('./config/passport')(passport);


// set view engine
app.set('view engine', 'hbs');
app.set("views","./views");
app.use(express.static(__dirname + '/public'));


/// Port:
app.set('view engine', 'hbs')
app.set('port', process.env.PORT || 4001)

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


app.use('/', news)

// * Configs Above THIS
// app.get('/', (req, res) => {
//     res.render('news-index')
// })

// use passport for current user
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

//use routes for passport
var routes = require('./config/routes');
app.use(routes);

app.listen(3000);

app.listen(app.get('port'), () => {
    console.log('It\'s aliiive!')
  })

