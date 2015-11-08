'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('MainController', ['$routeParams', '$location', '$route',
    function ($routeParams, $location, $route) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;

  }]);
