'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:scrollClass
 * @description
 * # scrollClass
 */
angular.module('portfolioApp')
  .directive('scrollClass', function ($window) {
    return function () {
        angular.element($window).bind("scroll", function() {
          if (this.pageYOffset >= 460 && this.pageYOffset < 940) {
            $('.nav-list li:first-child .nav-btn').addClass('active');
          } else {
            $('.nav-list li:first-child .nav-btn').removeClass('active');
          }

          if (this.pageYOffset >= 940 && this.pageYOffset < 1245) {
            $('.nav-list li:nth-child(2) .nav-btn').addClass('active');
          } else {
            $('.nav-list li:nth-child(2) .nav-btn').removeClass('active');

          }
          if (this.pageYOffset >= 1245) {
            $('.nav-list li:last-child .nav-btn').addClass('active');
          } else {
            $('.nav-list li:last-child .nav-btn').removeClass('active');
          }
        });
    };
  });
