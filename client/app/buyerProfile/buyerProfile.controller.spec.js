'use strict';

describe('Controller: BuyerProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('buySellInfluenceApp'));

  var BuyerProfileCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BuyerProfileCtrl = $controller('BuyerProfileCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
