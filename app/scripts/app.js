'use strict';

/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
angular
  .module('portfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'headroom',
    'ngRoute'
  ])
  .config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home/:pageId', {
        templateUrl: '/views/main.html',
        controller: 'MainController',
        controllerAs: 'controller'
      })
      .otherwise({
        redirectTo: '/home/about'
      });

  }]);
