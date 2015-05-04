'use strict';

angular.module('buySellInfluenceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl', 
        css: 'app/dashboard/dashboard.css'
      });
  });