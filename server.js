/* Smart or Bike      */
/* by Brian Cottrell  */
/* 03-21-2015         */

//Add neccessary packages
var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var traitify    = require('traitify');
var path        = require('path');

var http = require('http')
var port = process.env.PORT || 8080;

//Configure body body-parser
app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());

//Configure view engine and directory path
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/views')));

// Viewed at http://localhost:8080
app.get('/', function(req, res){
	//Displays the specified file on a webpage
    res.sendFile(path.join(__dirname+'views/index.html.ejs'));
});

//Start the server
app.listen(port);
console.log('Listening to port:', port);
// http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World \n');
// }).listen(port);