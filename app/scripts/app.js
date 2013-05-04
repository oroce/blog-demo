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

// dev mock
angular.module('blogDemoAppDev', ['blogDemoApp', 'ngMockE2E']).run(function ($httpBackend) {
    var posts = angular.toJson([
        { title: 'a', body: 'aa' },
        { title: 'b', body: 'bb'}
    ]);

    // returns the current list of phones
    $httpBackend.whenGET().respond(posts);

    // adds a new phone to the phones array
    $httpBackend.whenPOST('/create').respond(function (method, url, data) {
        posts.push(angular.fromJSON(data));
    });

    $httpBackend.whenGET('.*').passThrough();

});