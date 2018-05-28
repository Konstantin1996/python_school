var SandCastle = require('sandcastle').SandCastle;

var sandcastle = new SandCastle();

var script = sandcastle.createScript(" exports.main = function () {exit('hey' + name + 'helloWORLD');}");

script.on('exit', function(err, output){
	console.log(output);
})

script.run({name : 'Ben'});