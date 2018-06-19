var passport = require('passport');
var settings = {secret : 'mevnsecure'};
require('./config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var app = express();
var http = require('http').Server(app);
var cors = require('cors');


var dbUrl = require('./db');

/*var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(dbUrl.url, {promiseLibrary: require('bluebird')}).then(() => console.log('Connection successful')).catch((err)=>console.log(err));*/

var bodyParser = require('body-parser');

//mongo "mongodb+srv://clustercai-8gsod.mongodb.net/test" --username bernoche

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

/*var auth = require('./routes/auth');
app.use(auth);*/

var MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect('mongodb+srv://m3bompoi:m3bompoi' +
	'@clustercai-8gsod.mongodb.net/test?retryWrites=true', function (error, client) {
		if (error) return funcCallBack(error);

		db = client.db('project');


		console.log(' ***** Connected to db "project"');

});

app.post('/favoris', function(req,res) {
  if (req.body.titre) {
    var token = req.headers['x-access-token'];
   
   var decoded = jwt.verify(token, settings.secret);

   db.collection("users").update({'username':decoded.id}, {$push : {favoris: req.body.titre}});

   res.send({success: true});
  }
});

app.get('/favoris', function(req,res) {

   var token = req.headers['x-access-token'];
   console.log('token recu' +token);

   var decoded = jwt.verify(token, settings.secret);
   console.log(decoded);
   console.log(decoded.id);

   db.collection("users").find({'username':decoded.id}).toArray(function(err, result) {
    if (err) throw err;
      if (result[0]) {
          db.collection("movies").find({'name': {$all:result[0].favoris}}).toArray(function (error,results) {
            if (error) throw error;
            res.status(200).send(JSON.stringify(results));
          });
      }
   });

});

app.get('/movies', function(req,res) {

    var token = req.headers['x-access-token'];
   console.log('token recu' +token);

		db.collection("movies").find().toArray(function(error, results){
			if (error) throw error;

			console.log(' **** Getting data from collection "movies"');
				
			res.status(200);

			console.log(' **** Request returned ' + results.length +' elements');

			res.send(JSON.stringify(results));

}); 

app.get('/series', function(req,res) {
	

		db.collection("series").find().toArray(function(error, results){
			if (error) throw error;

			console.log(' **** Getting data from collection "series"');
				
			res.status(200);

			console.log(' **** Request returned ' + results.length +' elements');

			res.send(JSON.stringify(results));
		});
	

});

app.post('/signup', function(req, res) {

	
	
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'Please pass username and password.'});
  } else {
  	db.collection("users").find().toArray(function(error, results){

    	if (results.find(u => u.username == req.body.username)){
    		console.log ('already exists');
    		return res.send({success: false, msg: 'Username already exists.'});	
    	}

    	var newUser = {
			username: req.body.username,
			password: req.body.password,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
      favoris: []
    	};

      console.log('Register user :' + req.body.username);

      db.collection("users").insertOne(newUser).then(function(){

        //var token = jwt.sign({id:newUser._id}, settings.secret);
        res.send({success: true, msg: 'Welcome ' + newUser.firstName + ' ' + newUser.lastName,
                        /*token: 'JWT ' + token*/});
        //console.log('token : ' + token);
      })

      
      

    	
    	return ;
    	
    });
    
    /*// save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });*/


  }
});


app.post('/signin', function(req, res) {

	console.log('sign in');
	console.log(req.body.password);


  db.collection("users").find({'username':req.body.username}).toArray(function(error, result){

  	if (error) throw error;

  	if(!result[0]){
  		console.log('no user');
  		return res.send({success: false, msg: 'Authentication failed. User not found.'});
  	} else {
  		//Check password
  		if (req.body.password == result[0].password){
  			var token = jwt.sign({id:result[0].username}, settings.secret);
  			console.log('token back: ' + token);
  			res.send({success: true, msg:'Welcome back ' + result[0].firstName + ' ' + result[0].lastName,
                token: token});
  		} else {
  			console.log('wrong');
  			return res.send({success: false, msg: 'Authentication failed. Wrong password.'});
  		}
  	}
  });
});

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

http.listen(8080, function() {
	console.log(' ----- Listenning on port 8080 -----');
})