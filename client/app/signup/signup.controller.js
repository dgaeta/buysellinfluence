'use strict';

angular.module('buySellInfluenceApp')
  .controller('SignupCtrl', function ($scope, $state, twitterApp, currentUser) {
    $scope.buyer = false;
    $scope.seller = false;
    $scope.isLoggedIn = currentUser.isLoggedIn;


    $scope.setBuyer = function(){
    	currentUser.setBuyer;
    	$scope.buyer = true;
    	$scope.seller = false;
    };

    $scope.setSeller = function(){
    	currentUser.setSeller;
    	$scope.buyer = false;
    	$scope.seller = true;
    };

    //when the user clicks the connect twitter button, the popup authorization window opens
    $scope.connectButton = function() {
        currentUser.connectButton();
        console.log("done connecting with twitter");

    }

    //sign out clears the OAuth cache, the user will have to reauthenticate when returning
    $scope.signOut = function() {
        currentUser.signOut();
        $scope.isLoggedIn = false;
        console.log("sign");
    }

  });
