
angular.module('todoApp.login', ['ui.router'])
.config(function($stateProvider,$urlRouterProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/login');
  $stateProvider.state('login', {
    url: '/login',
	templateUrl: 'login.html',
  	controller:'todoApp.login.ctrl'
    });

}).controller('todoApp.login.ctrl', function() {
    var todoList = this;
    console.log('todoApp.login');
});


angular.module('todoApp.menu', ['ui.router','ckeditor'])
.config(function($stateProvider,$urlRouterProvider,$locationProvider) {
// $urlRouterProvider.otherwise('/menu');
//   $locationProvider.html5Mode(true);
  $stateProvider.state('menu', {
    url: '/menu',
    //template: '<h1>dfdfsdf</h1>',
	templateUrl: 'menu.html',
 	controller:'todoApp.menu.ctrl'
    })
  	.state('menu.sub', {
    url: '/sub',
	templateUrl: 'sub.html',
 	controller:'sub.menu.ctrl'
    });

}).controller('todoApp.menu.ctrl', function() {
    var todoList = this;
     todoList.options = {
        language: 'en',
        allowedContent: true,
        entities: false
      };

  // Called when the editor is completely ready.
    todoList.onReady = function () {
      console.log("onReady");
    };
    console.log('todoApp.menu.ctrl');
}).controller('sub.menu.ctrl', function() {
    var todoList = this;
    console.log('sub.menu.ctrl');
});


angular.module('todoApp', [
	'todoApp.login',
	'todoApp.menu',
	'ui.router']).controller('TodoListController', function() {
    var todoList = this;
    console.log('TodoListController');
});