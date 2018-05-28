var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var things = require('./things.js');

app.use('/', things);

app.use(bodyParser.urlencoded({extended: false}));

app.use('/user',function(req,res,next){
	console.log('A request for user received at ' + Date.now());
	console.log('Request URL ', req.originalUrl);
	next();
}, function(req,res,next) {
	console.log('Request type ', req.method);
});

app.get('/things',function(req,res){
	res.send('hi from things');
})

app.get('*', function(req,res){
	res.send('Sorry, this is invalid URL');
});

app.listen(3000);