'use strict';

describe('Service: twitterApp', function () {

  // load the service's module
  beforeEach(module('buySellInfluenceApp'));

  // instantiate service
  var twitterApp;
  beforeEach(inject(function (_twitterApp_) {
    twitterApp = _twitterApp_;
  }));

  it('should do something', function () {
    expect(!!twitterApp).toBe(true);
  });

});
