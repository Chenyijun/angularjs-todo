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
	    $scope.snoozed = 0;
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
    	$scope.snoozed++;
    };
    $scope.reactivateTodo = function(todoIndex){
    	$scope.todoItems[todoIndex].snoozeTime = '';
    	$scope.snoozed--;
    };
    
    $scope.snoozeClick = function(){
    	if ($scope.snoozeClicked == false){
    		$scope.snoozeClicked = true;
    	} else{
    		$scope.snoozeClicked = false;
    	}
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
