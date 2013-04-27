'use strict';

angular.module('blogDemoApp')
  .controller('PostReadCtrl', function ($scope, $routeParams, Post) {
  	console.log('dsd');

  	var id = $routeParams['id'];
    $scope.post = Post.getByID({id:id});
  });
