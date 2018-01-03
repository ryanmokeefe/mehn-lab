// file for static pages

// GET /
function home(req, res) {  
    // res.render('index');
    res.render('app-welcome');
    
  }
  module.exports = {
    home: home,
  }
  
