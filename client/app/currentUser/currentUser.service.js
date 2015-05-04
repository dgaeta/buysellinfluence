'use strict';

angular.module('buySellInfluenceApp')
  .service('currentUser', function (twitterApp, $state, $q, myDataRef) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var myUserService = {};
    var name = "";
    var email = "";
    var userType = "";
    var buyer = false;
    var buyerId = "";
    var seller = false;
    var sellerId = "";
    var isLoggedIn = false;
    var timeline = "this is my timeline";
    var followers = [];
    var credentials = [];


    twitterApp.initialize();

    var setBuyer = function(){
    	console.log("in user setting buyer");
    	buyer = true;
    	seller = false;
    }

    var setSeller = function(){
    	console.log("in user setting seller");
    	buyer = false;
    	seller = true;
    }

    //when the user clicks the connect twitter button, the popup authorization window opens
    var connectButton = function() {
        twitterApp.connectTwitter().then(function() {
            if (twitterApp.isReady()) {
                //if the authorization is successful, hide the connect button and display the tweets
                isLoggedIn = true;
                refreshTimeline();

                if (seller) {
                	$state.go('buyerProfile');
                } else {
                	$state.go('dashboard');
                }  
            }
            return true;
        });
    }

    //sign out clears the OAuth cache, the user will have to reauthenticate when returning
    var signOut =  function() {
        twitterApp.clearCache();
        isLoggedIn = false;
        console.log("logged out");
    }

    //using the OAuth authorization result get the latest 20 tweets from twitter for the user
    var refreshTimeline = function() {
        twitterApp.getLatestTweets().then(function(data) {
            timeline = data;
        });
        return true;
    }

    var getFollowersList = function() {
        var deferred = $q.defer();

        twitterApp.getFollowers().then(function(data) {
            followers = data;
            return deferred.promise;
        });
        return true;
    }

    var getCredentials = function() {
        twitterApp.getCredentials().then(function(data) {
            credentials = data;
        });
        return true;
    }


    //if the user is a returning user, hide the sign in button and display the tweets
    if (twitterApp.isReady()) {
        isLoggedIn = true;
        refreshTimeline();
        getFollowersList();
        getCredentials();
    }

    return{
        name: name,
    	signOut: signOut,
    	isLoggedIn: isLoggedIn,
    	setBuyer: setBuyer,
    	setSeller: setSeller,
    	connectButton: connectButton,
    	timeline: timeline,
        followers: followers,
        credentials: credentials
    };


  });
