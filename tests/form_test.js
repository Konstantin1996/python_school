var express = require('express');

// var SandCastle = require('sandcastle').SandCastle;

// var sandcastle = new SandCastle();



var app = express();


var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: false}));

app.listen(9000,function(){
	console.log('listen 9000')
});

app.get('',function(req,res){
	console.log(__dirname);
	res.end();
})

app.get('/index',function(req,res){
	var data = {age: 29, body: "tall", favorite_food: "chicken"};
	res.render('index', { name: "Jordon Levis", person_data: data.age});
	res.end();
})

app.get('/index/python_lessons', function(req,res){
	res.render('python_lessons', {smth : "HZ"});
	res.end();
})
// var result = '';
app.post('/index/python_lessons', function(req,res,callback){
	// console.log(req.body.userCodeReq);

	var userCodeReq = req.body.userCodeReq;
	
	var { spawn } = require("child_process");
	var options = {
		timeout: 5,
		killSignal: 'SIGSTOP',
	}


	var process = spawn('python', ['./python.py', userCodeReq, options]);
	process.stdout.on('data', (data) => {
		// console.log(data.toString('utf8'));
		res.render('python_lessons_answer', {userCode : data});
		res.end();
	})

	process.stderr.on('data', (data) => {
		console.log('Произошла ошибка ' + data.toString('utf8'));
	})

	process.on('exit', (code) => {
		console.log('Child exited with code ' +  code);
		// return callback(result);
	})

	// console.log(result.toString());
})

	// console.log(req.body.userCodeReq);


app.get('/user/submit',function(req,res){
	res.sendFile(__dirname +'/form.html');
})


// var exec = require ('child_process').exec

// exec('ipconfig',function(err, stdout, stderr){
// 	console.log(stdout);
// })


app.post('/user/submit', function(req,res) {
	console.log(req.body.name_field);
	res.send('you enter button body-parser info: ' + req);
	res.end();
})

app.get('*', function(req,res){
	res.send('Opps, something goes wrong');
})

