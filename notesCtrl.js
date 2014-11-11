var app = angular.module('myApp');

app.controller('notesCtrl', function($scope, dataService){

  $scope.addNote = function(){
  	newThing = $scope.newThing;
  	dataService.addNote(newThing);
  }



 $scope.note = dataService.getNotesData();
})