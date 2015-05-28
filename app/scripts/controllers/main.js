'use strict';

/**
 * @ngdoc function
 * @name yoTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoTestApp
 */
angular.module('yoTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    function init(){
	    $scope.todoItems = [];
	    $scope.todosCompleted = 0;
	    initNewItem();
    }
    
    function initNewItem(){
    	$scope.newItem = {'item': '', 'completed': false};
    }
    $scope.addItem = function(){
    	if ($scope.newItem.item !== ''){
	    	$scope.todoItems.push($scope.newItem);
	    	initNewItem();
    	};
    };
    $scope.completeTodo = function(todo){
    	todo.completed = true;
    	$scope.todosCompleted++;
    };
    $scope.deleteTodo = function(todoIndex){
    	delete $scope.todoItems[todoIndex];
    };
    $scope.filterCompleted = function(item){
    	return item.completed === true;
    };
    $scope.filterIncomplete = function(item){
    	return item.completed === false;
    };
    init();
  });
