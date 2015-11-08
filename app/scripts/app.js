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
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home/about');

      $stateProvider
        .state('main', {
          url: '/home',
          views: {
            "header_view": {
              templateUrl: 'views/header.html',
              controller: 'HeaderController'
            },
            "main_view": {
              templateUrl: 'views/main.html',
              controller: 'MainController'
            },
            "footer_view" : {
              templateUrl: 'views/footer.html',
              controller: 'FooterController'
            }
          }
        })
        .state('main.about', {
          url: '/about',
          views: {
            "content_view": {
              templateUrl: 'views/about.html'
            }
          }
        })
        .state('main.projects', {
          url: '/projects',
          views: {
            "content_view": {
              templateUrl: 'views/projects.html'
            }
          }
        })
        .state('main.contact', {
          url: '/contact',
          views: {
            "content_view": {
              templateUrl: 'views/contact.html'
            }
          }
      });
  }]);
