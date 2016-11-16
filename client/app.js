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
    var total = $scope.percentVti*1 + $scope.percentVxus*1 + $scope.percentBnd*1;
    
    
    if (total > 100) {
      var equalReduction = (total - 100) / 2;
      if ($scope.percentVti == safe) {
        console.log(equalReduction)
        $scope.percentVxus = equalReduction - equalReduction;
        $scope.percentBnd = equalReduction - equalReduction;
        total = 0; 
        
        console.log(equalReduction);
      } else if ($scope.percentVxus == safe) {
        console.log(equalReduction)
        $scope.percentVti = equalReduction - equalReduction; 
        $scope.percentBnd = equalReduction - equalReduction;
        total = 0;
        console.log(equalReduction);
      } else {
        console.log(equalReduction)
        $scope.percentVti = equalReduction - equalReduction; 
        $scope.percentVxus = equalReduction - equalReduction;
        total = 0;
        console.log(equalReduction);
      }
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