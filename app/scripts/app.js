'use strict';

angular.module('blogDemoApp', ['blogDemoApp.services', 'ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/new', {
        templateUrl: 'views/addpost.html',
        controller: 'AddPostCtrl'
      })
      .when('/:id', {
        templateUrl: 'views/postread.html',
        controller: 'PostReadCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
