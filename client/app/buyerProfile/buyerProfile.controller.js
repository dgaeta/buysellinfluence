'use strict';

angular.module('buySellInfluenceApp')
  .controller('BuyerProfileCtrl', function ($scope, currentUser, myDataRef) {
    //$scope.message = 'Hello';
    $scope.uid = currentUser.buyerId;
    $scope.buyer = null;
    $scope.name = "";
    $scope.payment_total = 0;

    new Firebase('https://buysellinfluence.firebaseio.com/buyers/-JoRJg-tnKwsIkbZiby2').once('value', function(snap) {
   			//console.log('I fetched a user!', snap.val());
   			$scope.buyer = snap.val();
   			$scope.name = snap.val().name;
   			$scope.$apply();
	});

  });
