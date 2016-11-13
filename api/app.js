var express = require('express');
var fetch = require('node-fetch');
var key = require('./key');
var app = express();



var url = "https://www.quandl.com/api/v3/datasets/GOOG/NYSE_BND.json?rows=1?api_key=" + key.key




//Get the last end of day price for VTI
//Get the last end of day price for VXUS
//Get the last end of day price for BND
var url = "https://www.quandl.com/api/v3/datasets/GOOG/NYSE_BND.json?rows=1?api_key=" + key.key


app.get('/', function (req, res) {
		
	var bnd;
	
	fetch(url)
	.then(function(res) {
    	return res.json();
	}).then(function(json) {
    	bnd = json.dataset.data[0][4];
    	res.send('Hello World! ' + bnd)
	})

	
})


app.listen(3000, function () {
  console.log('app listening on port 3000!')
})

