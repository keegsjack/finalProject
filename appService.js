var app = angular.module('myApp');

app.service('dataService', function(){
  var todoList = [
  	"this is a todo list"
  ];

  var doneList = [
  	"This is a done list",
  	"This is another one"
  ];

  this.getTodoData = function() {
  	return todoList;
  }

  this.getDoneData = function(){
  	return doneList;
  }

  this.addTodo = function(item){
  	todoList.push(item);
  }

  var quotesList = [
  	"these are quotes"
  ];

  this.getQuotesData = function() {
  	return quotesList;
  }

  this.addQuote = function(item){
  	quotesList.push(item);
  }

  var notesList = [
  	"these are notes"
  ];

  this.getNotesData = function() {
  	return notesList;
  }

  this.addNote = function(item){
  	notesList.push(item);
  }

  




})