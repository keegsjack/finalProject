var app = angular.module('myApp');

app.controller('todoCtrl', function($scope, dataService){

  $scope.addTodo = function(){
  	newThing = $scope.newThing;
  	dataService.addTodo(newThing);
  }

  $scope.doneTodo = function(arr, $index){
  	arr.splice(index, 1);
  	dataService.doneList.push(index, 1);
  }


 $scope.doneTodo = dataService.getDoneData();
 $scope.todo = dataService.getTodoData();
})