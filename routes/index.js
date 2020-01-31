var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Nuclear Family' });
});

/*Get anish page */
router.get('/anish', (req, res, next) => {
  res.render('anish', {title: 'Anish Information'})
});

/*Get Shailesh page */
router.get('/shailesh', (req, res, next) => {
  res.render('shailesh', {title: 'Shailesh Information'})
});

/*Get Dipali page */
router.get('/dipali', (req, res, next) => {
  res.render('dipali', {title: 'Dipali Information'})
});

/*Get Sukruti page */
router.get('/sukruti', (req, res, next) => {
  res.render('sukruti', {title: 'Sukruti Information'})
});

/*About page*/
router.get('/about', (req,res,next) => {
  res.render('about',{ title: 'About us',
  Members: [{
    name: 'Shailesh Gandhi - bussiness owner'
  }, {
    name: 'Dipali Gandhi - HouseWife'
  } ,{
    name: 'Sukruti Gandhi - .Net Developer'
  },{
    name: 'Anish Gandhi - computer programmer'
  }]
  })
})
module.exports = router;
