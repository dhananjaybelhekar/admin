angular.module('todoApp', ['ui.router'])
.config(function($stateProvider,$urlRouterProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('home', {
    url: '/',
    template: '<h1>dfdfsdf</h1>',
//  templateUrl: 'partial-home-list.html',
  controller:function($scope){ $scope.a1='Hii..';alert($scope.a1)}
    });

}).controller('TodoListController', function() {
    var todoList = this;
  });



