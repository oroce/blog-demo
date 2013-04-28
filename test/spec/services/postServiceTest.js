'use strict';


describe('Service: Post', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  var $httpBackend;

  beforeEach(module('blogDemoApp'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
 

  it('should be not null', inject(function(Post) {
    expect(Post).not.toBe(null);
  }));

  describe('getAll', function() {

    var mockedData = [{ title: 'a', body: 'aa' }, { title: 'b', body: 'bb'}];

    it('should be not null', inject(function(Post) {
      expect(Post.getAll).toBeDefined();
    }));

    beforeEach(function() {
      $httpBackend.whenGET().respond(mockedData);
    });

    it('should fetch all available posts', inject(function(Post) {
        var result = Post.getAll();

        $httpBackend.flush();
        
        expect(result).toEqualData(mockedData);
    }));

  });

});

