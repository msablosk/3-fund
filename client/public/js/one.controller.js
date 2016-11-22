angular.module("app")
.controller("oneCtrl", function($scope, Main, Api){
  // $scope variables
  $scope.principal = Main.principal;
  $scope.commission = Main.commission;
  $scope.pageClass = 'page-one';
  // $scope functions
  $scope.setPrincipal = Main.setPrincipal;
  $scope.setCommission = Main.setCommission;

})