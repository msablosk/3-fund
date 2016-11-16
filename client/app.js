angular.module("app", ['ngRoute'])
.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider){
  $routeProvider.
    when('/one', {
      templateUrl: '/partials/one.html',
      controller:'mainCtrl'
    })
    .when('/two', {
      templateUrl: '/partials/two.html',
      controller:'mainCtrl'
    })
    .otherwise('/one');
  }
])
.controller("mainCtrl", function($scope, $http){
	$scope.funds;
  $scope.principal = 1000;
  $scope.percentVti = 60;
  $scope.percentVxus = 20;
  $scope.percentBnd = 30;


  // function for making sure allotments cannot total greater than 100%
  $scope.checkPercentTotalAndRebalance = function(safe) {
    var total = $scope.percentVti*1 + $scope.percentVxus*1 + $scope.percentBnd*1,
        difference = total - 100;
    
    if (total > 100) {
      
      if ($scope.percentVti == safe) {
        while (difference > 0) {
          if ($scope.percentVxus > 0) {
            $scope.percentVxus -= 1;
            difference -= 1;
          }
          if ($scope.percentBnd > 0){
            $scope.percentBnd -= 1;
            difference -= 1;
          }
        }
        
        total = $scope.percentVti*1 + $scope.percentVxus*1 + $scope.percentBnd*1; 

      } else if ($scope.percentVxus == safe) {
        
        while (difference > 0) {
          if ($scope.percentVti > 0) {
            $scope.percentVti -= 1;
            difference -= 1;
          }
          if ($scope.percentBnd > 0){
            $scope.percentBnd -= 1;
            difference -= 1;
          }
        }

        total = $scope.percentVti*1 + $scope.percentVxus*1 + $scope.percentBnd*1;

      } else if ($scope.percentBnd == safe) {
        
        while (difference > 0) {
          if ($scope.percentVti > 0) {
            $scope.percentVti -= 1;
            difference -= 1;
          }
          if ($scope.percentVxus > 0){
            $scope.percentVxus -= 1;
            difference -= 1;
          }
        }

        total = $scope.percentVti*1 + $scope.percentVxus*1 + $scope.percentBnd*1;
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