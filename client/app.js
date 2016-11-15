angular.module("app", ['ngRoute']).
controller("appCtrl", function($scope, $http){
	$scope.funds;

	$http({
  		method: 'GET',
  		url: 'http://localhost:3000/api'
	}).then(function successCallback(response) {
    	$scope.funds = response.data
      console.log('done')
  	}, function errorCallback(response) {
    	console.log(response)
  	});

	
})