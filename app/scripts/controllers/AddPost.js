(function (angular) {
    'use strict';

    angular.module('blogDemoApp')
        .controller('AddPostCtrl', function ($scope, $location, Post) {
            $scope.post = {
                title: null,
                body: null
            };

            $scope.save = function () {
                Post.create({
                    title: $scope.post.title,
                    body: $scope.post.body
                }, function () {
                    $location.path('/');
                });
            };

        });

}(angular));
