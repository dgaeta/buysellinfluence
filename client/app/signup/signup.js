'use strict';

angular.module('buySellInfluenceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/signup/signup.html',
        controller: 'SignupCtrl', 
        css: 'app/signup/signup.css'
      });
  });