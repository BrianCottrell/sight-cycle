/* Smart or Bike      */
/* by Brian Cottrell  */
/* 03-21-2015         */

//Add neccessary packages
var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var path        = require('path');

var http = require('http')
var port = process.env.PORT || 8080;

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('m2xKey.json', 'utf8'));
console.log(obj);

//Configure body body-parser
app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());

//Configure view engine and directory path
app.set('view engine', 'ejs');
//app.use(express.static(path.join(__dirname, '/views')));

//Configure M2X and check status
var M2X = require("m2x");
var m2x = new M2X(obj.apiKey);
// m2x.status(function(status) {
//     console.log(status);
// });
var deviceData = [];

m2x.devices.list(function(response) {
    if (response.isSuccess()) {
        response.json.devices.forEach(function(device) {
            deviceData.push(device);
            console.log(device);
        });
    } else {
        console.log(response.error());
    }
});

//Root view
app.get('/', function(req, res){
    res.render('index.html.ejs', {
        deviceData: deviceData,
    });
});

//About view
app.get('/about', function(req, res){
    res.render('about.html.ejs');
});

//Start the server
app.listen(port);
console.log('Listening to port:', port);
// http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World \n');
// }).listen(port);