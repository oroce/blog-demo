'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('blogDemoApp'));

    var scope;

    // mock Post service
    var Post = {
        getAll: function () {
            return [];
        }
    };

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();

        $controller('MainCtrl', {
            $scope: scope,
            Post: Post
        });
    }));

    it('should posts to be defined', function () {
        expect(scope.posts).toBeDefined();
    });
});
