(function (angular) {
    'use strict';

    angular.module('blogDemoApp', ['ngResource'])
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
    angular.module('blogDemoAppDev', ['blogDemoApp', 'ngMockE2E'])
        .run(function ($httpBackend) {
        var posts = [
            { _id: 0, title: 'a', body: 'aa' },
            { _id: 1, title: 'b', body: 'bb' }
        ];

        // returns the current list of phones
        $httpBackend.whenGET('views/addpost.html').passThrough();
        $httpBackend.whenGET('views/main.html').passThrough();
        $httpBackend.whenGET('views/postread.html').passThrough();


        $httpBackend.whenGET(new RegExp('/[0-9]+')).respond(function (method, url, data) {
            var index = parseInt(url.substring(1), 10);
            return [200, posts[index], {}];
        });

        // adds a new phone to the phones array
        $httpBackend.whenPOST('/new').respond(function (method, url, data) {
            data = angular.fromJson(data);

            posts.push({
                _id: posts.length,
                title: data.title,
                body: data.body
            });

            return [200, {}, {}];
        });

        $httpBackend.whenGET().respond(posts);

    });

}(angular));