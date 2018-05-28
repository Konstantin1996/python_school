var express = require('express');
var fs = require('fs');
var app = express();

var staff = require('./module_1.js');

app.get('/', function(req,res){
	console.log("request was made " + req.url);
	var readStream = fs.createReadStream(__dirname + "/index.html",'utf8');
	readStream.pipe(res);
})

app.get('/privet', function(req,res){
	res.send("HI");
})

app.get('/users/:name', function(req,res){
	res.render('users', {person: req.params.name })
})

app.listen(9090,function(){
	console.log('listen 9090')
});