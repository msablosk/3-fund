angular.module("app", ['ngRoute'])
.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: '/partials/step1.html',
      controller:'mainCtrl'
    })
    .when('/step2', {
      templateUrl: '/partials/step2.html',
      controller:'mainCtrl'
    })
    .otherwise('/');
  }
])
.controller("mainCtrl", function($scope, $http){
	$scope.funds;
  $scope.principal = 1000;
  $scope.percentVti = 60;
  $scope.percentVxus = 20;
  $scope.percentBnd = 30;

  $scope.checkBalance = function(safe) {
    var total = $scope.percentVti + $scope.percentVxus + $scope.percentBnd;

    if (total > 100) {
      var equalReduction = (total - 100) / 2;
      
    }
  }


  /*
	$http({
  		method: 'GET',
  		url: 'http://localhost:3000/api'
	}).then(function successCallback(response) {
    	$scope.funds = response.data
  	}, function errorCallback(response) {
    	console.log(response.data)
  	});
  */
	
})