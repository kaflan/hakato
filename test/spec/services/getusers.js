'use strict';

describe('Service: getUsers', function () {

  // load the service's module
  beforeEach(module('hakaton2App'));

  // instantiate service
  var getUsers;
  beforeEach(inject(function (_getUsers_) {
    getUsers = _getUsers_;
  }));

  it('should do something', function () {
    expect(!!getUsers).toBe(true);
  });

});
