'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('HeaderController', [ '$scope', '$location', 'anchorSmoothScroll',
    function ($scope, $location, anchorSmoothScroll) {
      this.menuObject = {
          item: -1
        };

      this.menuItems = ['about', 'projects', 'contact'];

      $scope.gotoElement = function (eID){
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash(eID);

        // call $anchorScroll()
        anchorSmoothScroll.scrollTo(eID);
      };
  }]);
