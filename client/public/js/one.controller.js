angular.module("app")
.controller("oneCtrl", function($scope, Main, Api){
  // $scope variables
  $scope.principal = Main.principal;
  $scope.commission = Main.commission;
  $scope.pageClass = 'page-one';
  $scope.pageDirection = Main.pageDirection;
  $scope.setPageDirection = function(direction){
      Main.setPageDirection(direction);
      $scope.pageDirection = direction;
  }
  // $scope functions
  $scope.setPrincipal = Main.setPrincipal;
  $scope.setCommission = Main.setCommission;

})