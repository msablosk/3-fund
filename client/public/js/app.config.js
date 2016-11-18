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
    .when('/three', {
      templateUrl: '/partials/three.html',
      controller:'mainCtrl'
    })
    .otherwise('/one');
  }
])
