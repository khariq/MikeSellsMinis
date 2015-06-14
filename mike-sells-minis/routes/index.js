var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Facebook Login Test Page */
router.get('/fbLogin', function(req, res, next) {
	res.render('fbLogin', {title: 'Facebook' } );
	//res.send('Hellow World');
});

router.get('/newOffer', function(req, res, next) { 
	res.render('addOffer', {title: ''});
});

var mongoose = require('mongoose');
var Offers = mongoose.model('Offers');

// define a route
// p1 = request
// p2 = response
// p3 = next in q chain

router.get('/offers', function(req, res, next){

	// from the Offers collection, find all and bind it to the offers paramater
	Offers.find(function(err, offers){

		// if there is an error pass it up the q chain
		if (err) {
			return next(err);
		}

		// else set the json member of the response to the offers collection
		res.json(offers);

	});

});

router.post('/offers', function(req, res, next){

	var newOffer = new Offers(req.body);

	newOffer.save(function(err, post) {
		if (err) {
			return next(err);
		}

		res.json(newOffer);
	})	;

});


module.exports = router;

