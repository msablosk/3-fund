angular.module("app")
.controller("mainCtrl", function($scope, Main, Api){
  // $scope variables
  $scope.principal = Main.principal;
  $scope.percentVti = Main.percentVti;
  $scope.percentVxus = Main.percentVxus;
  $scope.percentBnd = Main.percentBnd;
  $scope.funds;
  Api.success(function(respsonse){
    $scope.funds = respsonse.data;
  })


  // $scope functions
  $scope.setPercents = Main.setPercents;
  $scope.setPrincipal = Main.setPrincipal;

  // function for making sure allotments cannot total greater than 100%
  $scope.checkPercentTotalAndRebalance = function(safe) {
    var total = $scope.percentVti*1 + $scope.percentVxus*1 + $scope.percentBnd*1;
        
    // rebalance down when the total percentage is too high
    if (total > 100) {
      var difference = total - 100;
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
})