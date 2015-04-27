'use strict';

describe('Controller: SignupCtrl', function () {

  // load the controller's module
  beforeEach(module('buySellInfluenceApp'));

  var SignupCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $http) {
    scope = $rootScope.$new();
    SignupCtrl = $controller('SignupCtrl', {
      $scope: scope
    });
  }));

  it('should create a buyer user correctly', function () {
    //
  });
});
