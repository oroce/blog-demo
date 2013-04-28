'use strict';

describe('Controller: AddPostCtrl', function () {

  // load the controller's module
  beforeEach(module('blogDemoApp'));

  var AddPostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddPostCtrl = $controller('AddPostCtrl', {
      $scope: scope
    });
  }));

  it('default title should be "new title"', function () {
    expect(scope.post.title).toBe('new title');
  });
});
