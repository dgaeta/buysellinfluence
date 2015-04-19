'use strict';

angular.module('buySellInfluenceApp')
  .controller('LoginCtrl', function ($scope, $q, twitterApp) {
    $scope.tweets = []; //array of tweets
    $scope.followers = [];
    $scope.isLoggedIn = false;

    twitterApp.initialize();

    //using the OAuth authorization result get the latest 20 tweets from twitter for the user
    $scope.refreshTimeline = function() {
        twitterApp.getLatestTweets().then(function(data) {
            $scope.tweets = data;
        });
    }

    //using the OAuth authorization result get the list of followers for the user
    $scope.getFollowersList = function() {
        twitterApp.getFollowers().then(function(data) {
            $scope.followers = data;
        });
    }

    //when the user clicks the connect twitter button, the popup authorization window opens
    $scope.connectButton = function() {
        twitterApp.connectTwitter().then(function() {
            if (twitterApp.isReady()) {
                //if the authorization is successful, hide the connect button and display the tweets
                $scope.isLoggedIn = true;
                $scope.refreshTimeline();
                $scope.getFollowersList();
            }
        });
    }

   //sign out clears the OAuth cache, the user will have to reauthenticate when returning
    $scope.signOut = function() {
        twitterApp.clearCache();
        $scope.tweets.length = 0;
        $scope.followers = [];
        $scope.isLoggedIn = false;
    }

    //if the user is a returning user, hide the sign in button and display the tweets
    if (twitterApp.isReady()) {
        $scope.isLoggedIn = true;
        $scope.refreshTimeline();
        $scope.getFollowersList();
    }

  });
