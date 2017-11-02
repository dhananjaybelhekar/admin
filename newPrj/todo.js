angular.module('todoApp', ['ui.router'])
.config(function($stateProvider,$urlRouterProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $stateProvider.state({
    url: '/',
    template: '<h1>dfdfsdf</h1>'
  });

}).controller('TodoListController', function() {
    var todoList = this;
  });