/* jshint -W068 */
'use strict';

var should = require('should');

var Post = require('../../lib/model/post');

describe('creating post', function () {

    it('should not create without title', function (done) {
        Post.create({
            title: null,
            body: 'test'
        }, function (err) {
            should.exist(err);
            done();
        });
    });

    it('should not create without body', function (done) {
        Post.create({
            title: 'alma',
            body: null
        }, function (err) {
            should.exist(err);
            done();
        });
    });
});