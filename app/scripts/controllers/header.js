'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('HeaderController', [
    function () {
      this.menuItems = [
        {
          id: 1,
          name: 'about'
        },
        {
          id: 2,
          name: 'projects'
        },
        {
          id: 3,
          name: 'contact'
        }
      ];
  }]);
