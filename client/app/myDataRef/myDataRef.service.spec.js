'use strict';

describe('Service: myDataRef', function () {

  // load the service's module
  beforeEach(module('buySellInfluenceApp'));

  // instantiate service
  var myDataRef;
  beforeEach(inject(function (_myDataRef_) {
    myDataRef = _myDataRef_;
  }));

  it('should do something', function () {
    expect(!!myDataRef).toBe(true);
  });

});
