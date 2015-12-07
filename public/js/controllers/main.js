'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('MainController', ['$routeParams', '$location', '$route', '$firebase',
    function ($routeParams, $location, $route) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;

      var ref = new Firebase('https://iamandrewthomas.firebaseio.com/');
  }]);
