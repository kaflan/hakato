'use strict';

/**
 * @ngdoc function
 * @name hakaton2App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the hakaton2App
 */
angular.module('hakaton2App')
  .controller('LoginCtrl', function($scope, getUsers, $location) {

    $scope.userLogin = function() {
      $scope.userInfo = getUsers.query($scope.login, $scope.studentCardSeries, $scope.studentCardNumber);
      // .then(function(data) {
      // });
      $location.path('/choice');
    }
  });
