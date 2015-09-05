'use strict';

describe('Service: getTiket', function () {

  // load the service's module
  beforeEach(module('hakaton2App'));

  // instantiate service
  var getTiket;
  beforeEach(inject(function (_getTiket_) {
    getTiket = _getTiket_;
  }));

  it('should do something', function () {
    expect(!!getTiket).toBe(true);
  });

});
