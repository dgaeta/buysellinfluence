'use strict';

angular.module('buySellInfluenceApp')
  .service('myDataRef', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var myDataRef = new Firebase('https://buysellinfluence.firebaseio.com/');

    var usersRef = myDataRef.child("users");

    var sellersRef = myDataRef.child("sellers");

    var buyersRef = myDataRef.child("buyers");


    //  var getSellers = function(){
    //     sellersRef.on("value", function(snapshot) {
    //         sellers = snapshot.val();
    //         console.log(sellers);
    //     }, function (errorObject) {
    //       console.log("The read failed: " + errorObject.code);
    //     });
    // } 


    return {
    	myDataRef: myDataRef,
    	usersRef: usersRef,
    	sellersRef: sellersRef,
        buyersRef: buyersRef
    };

  });
