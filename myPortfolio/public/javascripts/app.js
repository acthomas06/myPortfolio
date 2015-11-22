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
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');

      //$locationProvider.html5Mode(true);

      $stateProvider
        .state('main', {
          url: '/',
          views: {
            "header_view": {
              templateUrl: 'views/header.html',
              controller: 'HeaderController'
            },
            "image_view": {
              templateUrl: 'views/image.html'
            },
            "about_view": {
              templateUrl: 'views/about.html',
              controller: 'MainController'
            },
            "project_view": {
              templateUrl: 'views/projects.html',
              controller: 'MainController'
            },
            "contact_view": {
              templateUrl: 'views/contact.html',
              controller: 'MainController'
            },
            "footer_view" : {
              templateUrl: 'views/footer.html',
              controller: 'FooterController'
            }
          }
        });
  }]);
