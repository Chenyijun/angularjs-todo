'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yoTestApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  //Test AddItem function
  describe('scope.addItem', function(){
    it('adds item into todo list', function(){
      // scope = {};
      scope.newItem = 'test';
      scope.addItem();
      expect(scope.todoItems.length).toBe(1);
    });
    //should not add blank item
    it('should not add blank item', function(){
      scope.newItem = '';
      scope.addItem();
      expect(scope.todoItems.length).toBe(0);
    });
  });

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
