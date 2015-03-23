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
var formattedDeviceData = [];
m2x.devices.list(function(response) {
    if (response.isSuccess()) {
        response.json.devices.forEach(function(device) {
//            deviceData.push(device);
        });
   //     console.log(deviceData);
    } else {
        console.log(response.error());
    }
});

m2x.devices.view("933e760c444999d84ca9c7980bc5831c", function(device) {
    //console.log(device);
}, function(error) { console.log(error); });

m2x.devices.streamValues("933e760c444999d84ca9c7980bc5831c", "events", {}, function(stream){
    deviceData = (stream.json.values);
    //Format device data
    for(var i = 0; i < deviceData.length; i++){
        var newData = {};
        newData.time = deviceData[i].timestamp;
        newData.event = parseInt(deviceData[i].value.slice(0,2));
        var v = deviceData[i].value;
        newData.latitude = v.slice(v.indexOf(',')+1,v.substring(v.indexOf(',')+1, v.length).indexOf(',')+3);
        newData.longitude = v.slice(v.substring(v.indexOf(',')+1, v.length).indexOf(',')+4, v.length);
        formattedDeviceData.push(newData);
    }
    console.log(formattedDeviceData);
},function(error) { console.log(error); });

//Root view
app.get('/', function(req, res){
    res.render('index.html.ejs', {
        deviceData: formattedDeviceData,
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