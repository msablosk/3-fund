var express = require('express');
var fetch = require('node-fetch');
var key = require('./key');
var schedule = require('node-schedule');
var app = express();

app.use(express.static(__dirname + '/client'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/client'));
//Store all JS and CSS in Scripts folder.


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

var vti, vxus, bnd;
    
var getQuotesDaily = schedule.scheduleJob('0 5 23 * * 1-5', function(){    
    getQuote(urlVTI).then(function(response){
        vti = response.dataset.data[0][4];
        getQuote(urlVXUS).then(function(response){
            vxus = response.dataset.data[0][4];
            getQuote(urlBND).then(function(response){
                bnd = response.dataset.data[0][4];
            })
        })
    }, function(response){
        console.log(response.data);
    })
})

app.get('/api', function (req, res) {	
	res.json({"vti": vti, "vxus": vxus, "bnd": bnd})
})

app.get('/', function(req, res){ 
    res.sendFile("index.html");
})

app.listen(3000, function () {
  console.log('app listening on port 3000!')
})

