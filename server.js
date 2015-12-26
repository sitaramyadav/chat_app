var http = require('http');
var controller = require('./lib/controller');


http.createServer(controller).listen(3000);

