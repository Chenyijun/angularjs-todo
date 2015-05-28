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
	    $scope.snoozeClicked = false;
	    initNewItem();
    }
    function initNewItem(){
    	$scope.newItem = {'item': '', 'completed': false, 'snoozeTime': ''};
    }
    //todo actions
    $scope.addItem = function(){
    	if ($scope.newItem.item !== ''){
	    	$scope.todoItems.push($scope.newItem);
	    	initNewItem();
    	}
    };
    $scope.completeTodo = function(todo){
    	todo.completed = true;
    	$scope.todosCompleted++;
    };
    $scope.deleteTodo = function(todoIndex){
    	delete $scope.todoItems[todoIndex];
    };
    $scope.snoozeTodo = function(todoIndex, time){
    	$scope.todoItems[todoIndex].snoozeTime = time;
    	console.log($scope.todoItems[todoIndex].snoozeTime);
    	$scope.snoozeClicked = false;
    };
    //filters
    $scope.filterCompleted = function(item){
    	return item.completed === true;
    };
    $scope.filterIncomplete = function(item){
    	return item.completed === false && item.snoozeTime === '';
    };
    $scope.filterSnooze = function(item){
    	return item.snoozeTime !== '';
    };
    init();
  });
