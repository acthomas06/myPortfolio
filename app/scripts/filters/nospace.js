'use strict';

/**
 * @ngdoc filter
 * @name portfolioApp.filter:nospace
 * @function
 * @description
 * # nospace
 * Filter in the portfolioApp.
 */
angular.module('portfolioApp')
  .filter('nospace', function () {
    return function (value) {
      return (!value) ? '' : value.replace(/ /g, '');
    };
  });
