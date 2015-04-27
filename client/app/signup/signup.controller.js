'use strict';

angular.module('buySellInfluenceApp')
  .controller('SignupCtrl', function ($scope, $state, $http, twitterApp, currentUser) {
    $scope.buyer = false;
    $scope.seller = false;
    $scope.isLoggedIn = currentUser.isLoggedIn;


    $scope.setBuyer = function(){
    	currentUser.setBuyer();
    	$scope.buyer = true;
    	$scope.seller = false;
    };

    $scope.setSeller = function(){
    	currentUser.setSeller();
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

    $scope.createUser = function() {
    	$http({
        url: 'http://45.55.247.66/sellerprofiles/',
        method: 'POST',
        headers: {'Content-Type': 'application/json', 
                  'Accept-Language': 'en_US',
                  'Authorization' : 'illinois:420siebel'
                  },
        data: { "userprofile": { "user": { "username": "newuser5" }, "bio": "yo", "prof_type": 2} }
		}).success(function (data, status, headers, config) {
		            console.log(data)
		}).error(function (data, status, headers, config) {
		            console.log(data)
		});
    }

    $scope.getUsers = function() {
        $http({
        url: 'http://45.55.247.66/sellerprofiles/',
        method: 'GET',
        headers: {'Content-Type': 'application/json', 
                  'Access-Control-Allow-Origin': 'Origin, X-Requested-With, Content-Type, Accept',
                  'Accept-Language': 'en_US'
                  },
        }).success(function (data, status, headers, config) {
                    console.log(data);
                    console.log(status);
        }).error(function (data, status, headers, config) {
                    console.log(data);
                    console.log(status);
        });
    }

  });
