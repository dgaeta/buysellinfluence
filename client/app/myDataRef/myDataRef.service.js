'use strict';

angular.module('buySellInfluenceApp')
  .service('myDataRef', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var myDataRef = new Firebase('https://buysellinfluence.firebaseio.com/');

    var usersRef = myDataRef.child("users");

    var sellersRef = myDataRef.child("sellers");

    return {
    	myDataRef: myDataRef,
    	usersRef: usersRef,
    	sellersRef: sellersRef
    };

  });
