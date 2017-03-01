const fs = require('fs'), http = require('http');

http.createServer(function( req, res ){
	fs.readFile('index.html', function(err, data){
		res.write( data );
		//res.end();
	});
}).listen(8080);