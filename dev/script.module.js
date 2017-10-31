      angular.module('todoApp', ['ngResource'])
      .controller('TodoListController', function($resource) {
      var todoList = this;
      todoList.data={};
      new Fingerprint2().get(function(result, components){
      todoList.data.result=result;
      //todoList.data.components=components;
      });
      todoList.login= function(){
      var x = $resource('/api/login',null,{ 'get':{method:'POST'}});
      x.get(todoList.data).$promise.then(function(res){
      console.log(todoList.data);
      console.log(res);
      debugger;
      window.location = '/main';
      });
      }
      });
