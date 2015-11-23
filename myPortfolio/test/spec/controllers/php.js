'use strict';

describe('Controller: PhpCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var PhpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhpCtrl = $controller('PhpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PhpCtrl.awesomeThings.length).toBe(3);
  });
});
