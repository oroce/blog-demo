describe('blogDemoApp controllers', function () {
    'use strict';

    beforeEach(module('blogDemoApp'));

    describe('AddPostCtrl', function () {

        it('Post should be defined', inject(function ($controller) {
            var scope = {};

            $controller('AddPostCtrl', { $scope: scope });

            expect(scope.post).toBeDefined();
        }));
    });
});
