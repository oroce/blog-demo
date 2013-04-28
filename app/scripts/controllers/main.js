'use strict';

angular.module('blogDemoApp')
  .controller('MainCtrl', function ($scope, Post) {
  	$scope.posts = [];

    Post.getAll({}, function(posts) {
    	$scope.posts = posts;
    });
  });
