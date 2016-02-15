var app = angular.module('meanStart', ['ui.router']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl',
        onEnter: ['$state', 'auth', function($state, auth){
          if(!auth.isLoggedIn()){
            $state.go('login');
          }
        }]
      })
      .state('lessons', {
        url: '/lessons/:lesson',
        templateUrl: function ($stateParams){
          return '/lessons/' + $stateParams.lesson;
        },
        controller: 'AuthCtrl',
        onEnter: ['$state', 'auth', function($state, auth){
          if(!auth.isLoggedIn()){
            $state.go('home');
          }
        }]
      })
      .state('login', {
        url: '/login',
        templateUrl: '/login.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'auth', function($state, auth){
          if(auth.isLoggedIn()){
            $state.go('home');
          }
        }]
      })
      .state('register', {
        url: '/register',
        templateUrl: '/register.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'auth', function($state, auth){
          if(auth.isLoggedIn()){
            $state.go('home');
          }
        }]
      })

      $urlRouterProvider.otherwise('home');
  
}]);