var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
	res.send('GET route on things');
})

router.get('/kiski', function(req,res){
	res.send('GET kistki');
})

router.post('/', function(req,res){
	res.send('POST route on things');
})



module.exports = router;