var app = angular.module('meanStart', ['ui.router']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: function ($stateParams) {
          if (window.location.port === "3000") {
            return '/home-dev.html'
          } else {
            return '/home.html'
          }
        },
        controller: 'MainCtrl',
        onEnter: ['$state', 'auth', function($state, auth){
          if(!auth.isLoggedIn()){
            $state.go('login');
          }
        }]
      })
      .state('home-dev', {
        url: '/home-dev',
        templateUrl: '/home-dev.html',
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
        controller: 'MainCtrl',
        onEnter: ['$state', 'auth', function($state, auth){
          if(!auth.isLoggedIn()){
            $state.go('home');
          }
        }]
      })
      .state('prework', {
        url: '/prework',
        templateUrl: '/prework.html',
        controller: 'MainCtrl'
      })
      .state('setup', {
        url: '/setup',
        templateUrl: '/setup.html',
        controller: 'MainCtrl'
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
      // .state('register', {
      //   url: '/register',
      //   templateUrl: '/register.html',
      //   controller: 'AuthCtrl',
      //   onEnter: ['$state', 'auth', function($state, auth){
      //     if(auth.isLoggedIn()){
      //       $state.go('home');
      //     }
      //   }]
      // })

      $urlRouterProvider.otherwise('home');
  
}]);