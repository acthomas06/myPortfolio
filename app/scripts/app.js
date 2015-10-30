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
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    //Unmatched URL, route to...
    $urlRouterProvider.otherwise("/index/about");

    $stateProvider
      .state('main', {
        url: "/index",
        views: {
          "main_view": {
            templateUrl: "views/main.html",
            controller: "MainController"
          },
          "header_view": {
            templateUrl: "views/header.html",
            controller: "HeaderController"
          }
        }
      })
      .state('main.php', {
        url: "/php",
        views: {
          "content": {
            templateUrl: "views/Php.html",
            controller: "PhpController"
          }
        }
      })
      .state('main.about', {
        url: "/about",
        views: {
          "content": {
            templateUrl: "views/About.html",
            controller: "AboutController"
          }
        }
      })
      .state('main.javascript', {
        url: "/javascript",
        views: {
          "content": {
            templateUrl: "views/javascript.html",
            controller: "JavascriptController"
          }
        }
      })
  });
