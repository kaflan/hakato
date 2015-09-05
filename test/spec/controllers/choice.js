'use strict';

describe('Controller: ChoiceCtrl', function () {

  // load the controller's module
  beforeEach(module('hakaton2App'));

  var ChoiceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChoiceCtrl = $controller('ChoiceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChoiceCtrl.awesomeThings.length).toBe(3);
  });
});
