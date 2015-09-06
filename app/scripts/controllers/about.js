'use strict';

/**
 * @ngdoc function
 * @name hakaton2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hakaton2App
 */
angular.module('hakaton2App')
  .controller('AboutCtrl', function($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
