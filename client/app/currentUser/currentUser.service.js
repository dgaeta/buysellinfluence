'use strict';

angular.module('buySellInfluenceApp')
  .service('currentUser', function (twitterApp, $state) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var myUserService = {};
    var name = "";
    var email = "";
    var userType = "";
    var buyer = false;
    var seller = false;
    var isLoggedIn = false;

    twitterApp.initialize();

    var setBuyer = function(){
    	buyer = true;
    	seller = false;
    }

    var setSeller = function(){
    	buyer = false;
    	seller = true;
    }

    var connectButton = function() {
    	console.log("pressed");
        twitterApp.connectTwitter().then(function() {
        	console.log("in here");
            if (twitterApp.isReady()) {
            	console.log("hello");
                //if the authorization is successful, hide the connect button and display the tweets
                isLoggedIn = true;
                $state.go('dashboard');
            }
        });
    }

    var signOut =  function() {
        twitterApp.clearCache();
        isLoggedIn = false;
        console.log("logged out");
    }

    if (twitterApp.isReady()) {
        isLoggedIn = true;
    }

    return{
    	signOut: signOut,
    	isLoggedIn: isLoggedIn,
    	setBuyer: setBuyer,
    	setSeller: setSeller,
    	connectButton: connectButton,
    	
    };


  });
