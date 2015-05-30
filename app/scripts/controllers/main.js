'use strict';

/**
 * @ngdoc function
 * @name yoTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoTestApp
 */
var testApp = angular.module('yoTestApp');
testApp.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    function init(){
	    $scope.todoItems = [];
	    $scope.todosCompleted = 0;
	    $scope.snoozed = 0;
	    $scope.isClicked = false;
	    $scope.editedItem = null;
	    initNewItem();
    }
    function initNewItem(){
    	$scope.newItem = {'item': '', 'completed': false, 
    	'snoozeTime': '', 'snoozeClicked': false,
    	'isHovered': false, 'editing': false
    	};
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
    	$scope.todoItems.splice(todoIndex,1);
    };
    $scope.snoozeTodo = function(todoIndex, time){
    	$scope.todoItems[todoIndex].snoozeTime = time;
    	$scope.todoItems[todoIndex].snoozeClicked = false;
    	$scope.snoozed++;
    };
    $scope.reactivateTodo = function(todoIndex){
    	$scope.todoItems[todoIndex].snoozeTime = '';
    	$scope.snoozed--;
    };
    
    $scope.snoozeClick = function(todoIndex){
    	if ($scope.todoItems[todoIndex].snoozeClicked === false){
    		$scope.todoItems[todoIndex].snoozeClicked = true;
    	} else{
    		$scope.todoItems[todoIndex].snoozeClicked = false;
    	}
    };
    $scope.checkSnooze = function(todoIndex){
    	if ($scope.todoItems[todoIndex].snoozeClicked === true){
    		return true;
    	}else{
    		return false;
    	}
    };
    $scope.activateHover = function(todoIndex){
    	$scope.todoItems[todoIndex].isHovered = true;
    };
    $scope.deactivateHover = function(todoIndex){
    	$scope.todoItems[todoIndex].isHovered = false;
    	if ($scope.todoItems[todoIndex].snoozeClicked === true){
			$scope.todoItems[todoIndex].snoozeClicked = false;
    	}
    };

    $scope.startEditing = function(todo){
        todo.editing=true;
        $scope.editedItem = todo;
        console.log('start editing'+todo.item);
    };
        
    $scope.doneEditing = function(todo){
        todo.editing=false;
        $scope.editedItem = null;
        console.log('end editing'+todo.item);

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

