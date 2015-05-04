'use strict';

angular.module('buySellInfluenceApp')
  .controller('SignupCtrl', function ($scope, $state, $http, $q, twitterApp, currentUser, myDataRef) {
    $scope.buyer = false;
    $scope.seller = false;

    $scope.userTypeModel = null;

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
    }

    //sign out clears the OAuth cache, the user will have to reauthenticate when returning
    $scope.signOut = function() {
        currentUser.signOut();
        $scope.isLoggedIn = false;
        console.log("sign");
    }

    $scope.createEmailUser = function() {
    	myDataRef.usersRef.push({
            isBuyer: $scope.buyer,
            isSeller: $scope.seller,
            name: "Danny"
        });
    }

    $scope.createTwitterUser = function() {
      

        twitterApp.connectTwitter().then( function (){
            if (twitterApp.isReady()) {
                currentUser.isLoggedIn = true;
                if (currentUser.seller) {
                    $state.go('buyerProfile');
                } else {
                    $state.go('dashboard');
                }  
                twitterApp.getLatestTweets().then( function(data) {
                    currentUser.timeline = data; 
                    twitterApp.getFollowers().then( function(data) {
                        currentUser.followers = data;
                        twitterApp.getCredentials().then( function(data) {
                            currentUser.credentials = data;
                            var newUserRef = myDataRef.usersRef.push({
                                isBuyer: $scope.buyer,
                                isSeller: $scope.seller,
                                timeline: currentUser.timeline,
                                followers: currentUser.followers,
                                credentials: currentUser.credentials
                            }, function(error) {
                                var newSellerRef = myDataRef.sellersRef.push({
                                    userId: newUserRef.key(),
                                    bio: currentUser.credentials.description,
                                    favorites_count: currentUser.credentials.favourites_count,
                                    followers_count: currentUser.credentials.followers_count,
                                    twitter_id: currentUser.credentials.id,
                                    location: currentUser.credentials.location,
                                    name: currentUser.credentials.name,
                                    profile_image_url:  currentUser.credentials.profile_image_url,
                                    twitter_screen_name: currentUser.credentials.screen_name,
                                    statuses_count: currentUser.credentials.statuses_count
                                }, function(error) {
                                    currentUser.sellerId = newSellerRef.key();
                                })
                            })
                        })
                    })
                })
            }
        })



        console.log("done connecting with twitter");
    }

  });
