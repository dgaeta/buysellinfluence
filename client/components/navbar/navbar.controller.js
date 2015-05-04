'use strict';

angular.module('buySellInfluenceApp')
  .controller('NavbarCtrl', function ($scope, $location, currentUser) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];


    $scope.signout = function(){
      currentUser.signOut();
    }

    $scope.isLoggedIn = currentUser.isLoggedIn;
    console.log($scope.isLoggedIn);


    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });