'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:graphExample
 * @description
 * # graphExample
 */
angular.module('portfolioApp')
  .directive('graphExample', ['$timeout', '$rootScope',
      function ($timeout, $rootScope) {
        "use strict";

        return {
          restrict: "E",
          scope: {
            data: "=set",
            bar1: "=bar1",
            bar2: "=bar2"
          },
          link: function (scope, element) {

            $rootScope.$on('event:reloadGraph', function (event, toState, toParams, fromState, fromParams) {
              //If page requires logged in user and user is not logged in, redirect to login

              $timeout(function () {
// set graph variables
                var svgWidth = '100%';
                var svgHeight = 120;
                var svgPadding = 44;
                var barHeight = 40;
                var paddingTop = 20;
                var color = d3.scale.ordinal()
                  .range(['#6398AA', '#043C4E']);

                element.children(":first").remove();
                var svg = d3.select(element[0])
                  .append('svg')
                  .attr('width', svgWidth)
                  .attr('height', svgHeight);

                svg.selectAll('rect.grey')
                  .data([100, 100])
                  .enter()
                  .append('rect')
                  .attr()
                  .attr('x', function (d, i) {
                    return 0;
                  })
                  .attr('y', function (d, i) {
                    return (i * svgPadding) + paddingTop;
                  })
                  .attr('width', function (d, i) {
                    return (d + '%');
                  })
                  .attr('height', barHeight)
                  .attr('fill', '#f3f3f3');

                svg.selectAll('rect.graph')
                  .data([scope.bar1, scope.bar2])
                  .enter()
                  .append('rect')
                  .attr('x', function (d, i) {
                    return 0;
                  })
                  .attr('y', function (d, i) {
                    return (i * svgPadding) + paddingTop;
                  })
                  .attr('width', 0)
                  .transition()
                  .attr('width', function (d, i) {
                    return (d + '%');
                  })
                  .duration(1450)
                  .delay(25)
                  .attr('height', barHeight)
                  .attr('fill', function (d, i) {
                    return color(i);
                  });

                svg.selectAll('text.number')
                  .data([scope.bar1, scope.bar2])
                  .enter()
                  .append('text')
                  .attr("class", "number")
                  .attr("text-anchor", "end")
                  .text(function (d) {
                    return d;
                  })
                  .style({
                    'fill': '#fff',
                    'font-weight': 700,
                    'font-size': '16px'
                  })
                  .attr('x', function (d, i) {
                    return d - 1.8 + '%';
                  })
                  .attr('y', function (d, i) {
                    return (i * svgPadding) + 46;
                  });

                var scaleData = [0, 25, 50, 75, 100];

                svg.selectAll('text.scale')
                  .data(scaleData)
                  .enter()
                  .append('text')
                  .attr("class", "number")
                  .attr("text-anchor", function (d, i) {
                    if (d === 0) {
                      return 'start';
                    } else if (d === 100) {
                      return 'end';
                    } else {
                      return 'middle';
                    }
                  })
                  .text(function (d) {
                    return d;
                  })
                  .style({
                    'fill': '#000',
                    'font-weight': 400,
                    'font-size': '11px'
                  })
                  .attr('x', function (d, i) {
                    return d + '%';
                  })
                  .attr('y', paddingTop + 99);

                var lineData = [0, 25, 50, 75, 100];

                svg.selectAll('line.one')
                  .data(lineData)
                  .enter()
                  .append("line")
                  .attr("x1", function (d, i) {
                    return d + '%';
                  })
                  .attr("y1", paddingTop)
                  .attr("x2", function (d, i) {
                    return d + '%';
                  })
                  .attr("y2", paddingTop + 40)
                  .style({
                    'stroke-dasharray': ("3, 3"),
                    'stroke': 'rgba(0,0,0,.1)'
                  })
                  .attr("stroke-width", 1);

                svg.selectAll('line.two')
                  .data(lineData)
                  .enter()
                  .append("line")
                  .attr("x1", function (d, i) {
                    return d + '%';
                  })
                  .attr("y1", paddingTop + 44)
                  .attr("x2", function (d, i) {
                    return d + '%';
                  })
                  .attr("y2", paddingTop + 84)
                  .style({
                    'stroke-dasharray': ("3, 3"),
                    'stroke': 'rgba(0,0,0,.1)'
                  })
                  .attr("stroke-width", 1);
              }, 1000);
            });
            $rootScope.$broadcast("event:reloadGraph");
          }
        };
      }
    ]);
