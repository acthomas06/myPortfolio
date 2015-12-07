'use strict';

/**
 * @ngdoc filter
 * @name portfolioApp.filter:capitalize
 * @function
 * @description
 * # capitalize
 * Filter in the portfolioApp.
 */
angular.module('portfolioApp')
  .filter('capitalize', function () {
    return function (input, all) {
      var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
      return (!!input) ? input.replace(reg, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }) : '';
    };
  });
