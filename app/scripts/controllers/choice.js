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
    // $scope.transport = 'metro'; // metro , tram,
    // $scope.variant = 'metro'; // 46, 62 , unlimited
    // $scope.month = 'metro';
    // var prices = {
    //   'metro': {
    //     'small': '75',
    //     'medium': 96,
    //     'unlimited': 150
    //   }
    // };

    // var transport = $scope.transport;
    // var variant = $scope.variant;
    // var month = $scope.month;
    $scope.submitBuy = function() {
      $scope.price = {
        transport: $scope.transport,
        variant: $scope.variant,
        month: $scope.month
      };
      getTicket.query($scope.price).then(function(data) {
        $scope.ticketOk = angular.copy(data);

      });
      console.log($scope.price);
    };

    function isFormValid() {
      if (transport !== '' &&
        variant !== '' &&
        month !== '')
        return true;
    }
  });
