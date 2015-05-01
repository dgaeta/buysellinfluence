'use strict';

angular.module('buySellInfluenceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('buyerProfile', {
        url: '/buyerProfile',
        templateUrl: 'app/buyerProfile/buyerProfile.html',
        controller: 'BuyerProfileCtrl',
        css: 'app/buyerProfile/buyerProfile.css'
      });
  });