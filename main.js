var express = require('express');
var app = express();
var http = require('http').Server(app);
var cors = require('cors');

//mongo "mongodb+srv://clustercai-8gsod.mongodb.net/test" --username bernoche

app.use(cors());

var MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect('mongodb+srv://m3bompoi:m3bompoi' +
	'@clustercai-8gsod.mongodb.net/test?retryWrites=true', function (error, client) {
		if (error) return funcCallBack(error);

		db = client.db('project');


		console.log(' ***** Connected to db "project"');

});

app.get('/movies', function(req,res) {
	

		db.collection("movies").find().toArray(function(error, results){
			if (error) throw error;

			console.log(' **** Getting data from collection "movies"');
				
			res.status(200);

			console.log(' **** Request returned ' + results.length +' elements');

			res.send(JSON.stringify(results));
		});
	

});

http.listen(8080, function() {
	console.log(' ----- Listenning on port 8080 -----');
})