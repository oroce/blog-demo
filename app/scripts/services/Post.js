'use strict';

angular.module('blogDemoApp.services', ['ngResource'])
       // Post
        .factory('Post', function($resource){

                return $resource('/:id/:action/', { id:'@id' }, {
                        getAll: { method: 'GET', params: { }, isArray: true },
                        getByID : { method: 'GET', params: { } },
                        create: { method: 'POST', params: { action: 'new' } },
                        getForEditByID: { method: 'GET', params: { action: 'edit' } },
                        edit : { method: 'PUT', params: { action : 'edit' } }
                });
        });

