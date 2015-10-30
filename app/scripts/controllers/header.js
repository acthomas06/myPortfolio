'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('HeaderController', ['$scope', '$state',  function ($scope, $state) {
    $scope.states = {};
    $scope.states.activeItem = null;
    $scope.menuItems = [
      {
        id: 1,
        name: 'about'
      },
      {
        id: 2,
        name: 'php'
      },
      {
        id: 3,
        name: 'javascript'
      }
    ];

    $scope.capitalize = function () {
      return this.toLowerCase().replace(/\b\w/g, function (m) {
        return m.toUpperCase();
      });
    };

    $scope.init = function () {
      if ($state.current.name === 'main.about') {
        $scope.states.activeItem = 1;
      } else if ($state.current.name === 'main.php') {
        $scope.states.activeItem = 2;
      } else if ($state.current.name === 'main.javascript') {
        $scope.states.activeItem = 3;
      }
    };
    $scope.init();
  }]);
