'use strict';

angular.module('blogDemoApp')
  .controller('AddPostCtrl', function ($scope, $location, Post) {
    $scope.post = {
    	title : 'new title',
    	body: ''
    };
    

    $scope.$watch('post.title', function(old, n) {
    	//alert(n);
    });

    $scope.save = function() {
    	Post.create({
    		title: $scope.post.title,
    		body: $scope.post.body
    	}, function() {
    		$location.path( "/" );
    	});
    }
    
  });
