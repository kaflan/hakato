'use strict';

/**
 * @ngdoc function
 * @name hakaton2App.controller:ChoiceCtrl
 * @description
 * # ChoiceCtrl
 * Controller of the hakaton2App
 */
angular.module('hakaton2App')
  .controller('ChoiceCtrl', function($scope, getTicket, $location) {
    $scope.submitBuy = function() {
      $scope.price = {
        transport: $scope.transport,
        variant: $scope.variant,
        month: $scope.month
      };
      $scope.tiketOk = getTicket.query($scope.price);

      console.log($scope.registOk);
    };

    function isFormValid() {
      if (transport !== '' &&
        variant !== '' &&
        month !== '')
        return true;
    }
  });
