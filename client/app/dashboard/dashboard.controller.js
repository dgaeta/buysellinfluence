'use strict';

angular.module('buySellInfluenceApp')
  .controller('DashboardCtrl', function ($scope, myDataRef, currentUser) {
    $scope.message = 'Hello';
    $scope.myDataRef = myDataRef;
    $scope.sellers = [];

   	myDataRef.sellersRef.on("value", function(snapshot) {
        $scope.sellers = snapshot.val();
        $scope.$apply();
        console.log($scope.sellers);
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });



  });
