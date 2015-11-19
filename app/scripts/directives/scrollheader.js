'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:scrollHeader
 * @description
 * # scrollHeader
 */
angular.module('portfolioApp')
  .directive('scrollHeader', function ($window) {
    return function postLink(scope, element, attrs) {
        angular.element($window).bind("scroll", function () {
        	if (this.pageYOffset >= 200) {
        		element.addClass('pinned');
        	} else {
        		element.removeClass('pinned');
        	}

        	if (this.pageYOffset >= 440 && this.pageYOffset <= 890) {}
        });
      };
  });
