'use strict';

angular.module('pokApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/guided', {
        templateUrl: 'views/guided.html',
        controller: 'GuidedCtrl'
      })
      .when('/guided/:level', {
        templateUrl: 'views/guided.html',
        controller: 'GuidedCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
