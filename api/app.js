var express = require('express');
var fetch = require('node-fetch');
var key = require('./key');
var app = express();

//Get the last end of day price for VTI
var urlVTI = "https://www.quandl.com/api/v3/datasets/GOOG/NYSE_VTI.json?rows=1?api_key=" + key.key
//Get the last end of day price for VXUS
var urlVXUS = "https://www.quandl.com/api/v3/datasets/GOOG/NASDAQ_VXUS.json?rows=1?api_key=" + key.key
//Get the last end of day price for BND
var urlBND = "https://www.quandl.com/api/v3/datasets/GOOG/NYSE_BND.json?rows=1?api_key=" + key.key

function getQuote(url) {
    // RETURN the promise
    return fetch(url).then(function(response){
        return response.json(); // process it inside the `then`
    });
}

app.get('/', function (req, res) {
		
	var vti, vxus, bnd;
	
	getQuote(urlVTI).then(function(response){
    	vti = response.dataset.data[0][4];
    	getQuote(urlVXUS).then(function(response){
    		vxus = response.dataset.data[0][4];
    		getQuote(urlBND).then(function(response){
    			bnd = response.dataset.data[0][4];
    			res.json({"vti": vti, "vxus": vxus, "bnd": bnd})
    		})
    	})
	})
})


app.listen(3000, function () {
  console.log('app listening on port 3000!')
})

