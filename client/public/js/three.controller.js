angular.module("app")
.controller("threeCtrl", function($scope, Main, Api){
  // $scope variables
  $scope.principal = Main.principal;
  $scope.commission = Main.commission
  $scope.percentVti = Main.percentVti;
  $scope.percentVxus = Main.percentVxus;
  $scope.percentBnd = Main.percentBnd;
  $scope.cashVti = Main.cashVti;
  $scope.cashVxus = Main.cashVxus;
  $scope.cashBnd = Main.cashBnd;
  $scope.Math = Math;
  $scope.pageClass = 'page-three';

  $scope.funds;
  Api.getFunds().then(function(response){
    $scope.funds = response;
  })
})