var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var fs = require('fs');

var clients = [];

var app = express();

var dataFile = "./lib/data/data.json";

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./public'));

app.get('/update',function(req ,res){
		
})

app.post('/join',function(req ,res){
	if(clients.indexOf(req.cookies.name) != -1){
		res.json({alreadyConnected : true});
		res.end();
	}else{
		clients.push(req.body.name);
		res.cookie('name',req.body.name);
		res.json({status : true});
	}
})

app.post('/send',function(req ,res){
	fs.appendFile(dataFile,req.body.messege,function(err){
		if(err) throw err;

	})
	res.send()
	// res.json({messege : req.body.messege})
})



module.exports = app;
