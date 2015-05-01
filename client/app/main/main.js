'use strict';

angular.module('buySellInfluenceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        css: 'app/main/main.css'
      });
  });