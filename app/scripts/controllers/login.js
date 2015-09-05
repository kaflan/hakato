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
      getUsers.query($scope.login, $scope.password).then(function(data) {
        $scope.userInfo = angular.copy(data);
      });
      $location.path('/choice');
    }
  });
