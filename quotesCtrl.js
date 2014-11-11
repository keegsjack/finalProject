var app = angular.module('myApp');

app.controller('quotesCtrl', function($scope, dataService){

  $scope.addQuote = function(){
  	newThing = $scope.newThing;
  	dataService.addQuote(newThing);
  }



 $scope.quote = dataService.getQuotesData();
})