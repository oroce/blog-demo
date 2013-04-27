'use strict';

describe('Service: Post', function() {

  var $httpBackend;

    // load the service's module
  beforeEach(module('blogDemoApp'));

  // instantiate service
  var Post;
  beforeEach(inject(function (_Post_) {
    Post = _Post_;
  }));

  it('should do something', function () {
    expect(!!Post).toBe(true);
  });

  beforeEach(inject(function($injector) {
    var uri = 'http://localhost:3000/';
    var postArr = [];
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET(uri).respond(postArr)
  }));

  describe('Post#/', function() {
    it('returns a JSON', inject(function(Post) {
      var postArr = Post.getAll();
      $httpBackend.flush();
      expect(postArr).toBe([]);
    }));
  });
});