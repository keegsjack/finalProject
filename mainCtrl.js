var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, dataService, $location){

  $scope.getClass = function(path) {
  	if($location.path().substr(0, path.length) == path) {
  		return "active"
  	} else {
  		return ""
  	}
  }
  $scope.changeView = function(view){
  	$location.path(view);
  }
})