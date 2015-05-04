'use strict';

angular.module('buySellInfluenceApp')
  .service('twitterApp', function ($q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
	var authorizationResult = false;


  return {
    initialize: function() {
        //initialize OAuth.io with public key of the application
        OAuth.initialize('Ll-wnTQPQpihddhWZUL3Llr0JjY', {cache:true});
        //try to create an authorization result when the page loads, this means a returning user won't have to click the twitter button again
        authorizationResult = OAuth.create('twitter');
    },
    isReady: function() {
        return (authorizationResult);
    },
    connectTwitter: function() {
        var deferred = $q.defer();
        OAuth.popup('twitter', {cache:true}, function(error, result) { //cache means to execute the callback if the tokens are already present
            if (!error) {
                authorizationResult = result;
                deferred.resolve();
            } else {
                //do something if there's an error
            }
        });
        return deferred.promise;
    },
    clearCache: function() {
        OAuth.clearCache('twitter');
        authorizationResult = false;
    },
    getLatestTweets: function () {
        //create a deferred object using Angular's $q service
        var deferred = $q.defer();
        var promise = authorizationResult.get('/1.1/statuses/home_timeline.json').done(function(data) { //https://dev.twitter.com/docs/api/1.1/get/statuses/home_timeline
            //when the data is retrieved resolved the deferred object
            deferred.resolve(data)
        });
        //return the promise of the deferred object
        return deferred.promise;
    },
    getFollowers: function () {
        //create a deferred object using Angular's $q service
        var deferred = $q.defer();
        var promise = authorizationResult.get('/1.1/followers/list.json').done(function(data) { //https://dev.twitter.com/rest/reference/get/followers/list
            //when the data is retrieved resolved the deferred object
            deferred.resolve(data)
        });
        //return the promise of the deferred object
        return deferred.promise;
    },
    getStatuses: function () {
        //create a deferred object using Angular's $q service
        var deferred = $q.defer();
        var promise = authorizationResult.get('/1.1/statuses/user_timeline.json').done(function(data) { //https://api.twitter.com/1.1/statuses/user_timeline.json
            //when the data is retrieved resolved the deferred object
            deferred.resolve(data)
        });
        //return the promise of the deferred object
        return deferred.promise;
    },
    getCredentials: function () {
        //create a deferred object using Angular's $q service
        var deferred = $q.defer();
        var promise = authorizationResult.get('/1.1/account/verify_credentials.json').done(function(data) { //https://api.twitter.com/1.1/account/verify_credentials.json
            //when the data is retrieved resolved the deferred object
            deferred.resolve(data)
        });
        //return the promise of the deferred object
        return deferred.promise;
    }
  }

});
