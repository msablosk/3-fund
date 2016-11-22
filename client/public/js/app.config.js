angular.module("app", ['ngRoute', 'ngAnimate'])
.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider){
  $routeProvider.
    when('/one', {
      templateUrl: '/partials/one.html',
      controller:'oneCtrl'
    })
    .when('/two', {
      templateUrl: '/partials/two.html',
      controller:'twoCtrl'
    })
    .when('/three', {
      templateUrl: '/partials/three.html',
      controller:'threeCtrl'
    })
    .otherwise('/one');
  }
])
