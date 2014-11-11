var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	  .when('/todo', {
	  	templateUrl:'/todo.html',
	  	controller: 'todoCtrl'
	  })
	  .when('/quotes', {
	  	templateUrl: '/quotes.html',
	  	controller: 'quotesCtrl'
	  })
	  .when('/notes', {
	  	templateUrl: '/notes.html',
	  	controller: 'notesCtrl'
	  })
	  .otherwise({redirectTo: '/'})
	});