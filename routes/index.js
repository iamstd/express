var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }, (err, html) => {
    res.send('lee')
  });
});
// product-details
router.all('/product', function(req, res, next) {
  res.render('layout', { title: 'Express1' });
});
// router.all('/:product', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use('/ddd', function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

var cb0 = function (req, res, next) {
  console.log('CB0');
  // res.send('lee');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1', req.signedCookies.Hm_lvt_d0bc9da6c7baaeb14043a361df32bf07);
  next();
}

router.get('/example/:d', [cb0, cb1], function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});



router.use(function(err,req, res, next) {
  console.error( '======');
  res.status(500).send('Something broke!');
});

module.exports = router;
