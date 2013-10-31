describe('blogDemoApp controllers', function () {
    'use strict';

    beforeEach(module('blogDemoApp'));

    describe('AddPostCtrl', function () {

        it('default title should be NULL', inject(function ($controller) {
            var scope = {};

            $controller('AddPostCtrl', { $scope: scope });

            expect(scope.post.title).toBe(null);
        }));
    });
});
