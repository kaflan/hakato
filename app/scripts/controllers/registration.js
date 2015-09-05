'use strict';

/**
 * @ngdoc function
 * @name hakaton2App.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the hakaton2App
 */
angular.module('hakaton2App')
  .controller('RegistrationCtrl', function($scope, registration, $location) {
    // $scope.email;
    // $scope.password;
    // $scope.passwordRepeat;
    // $scope.firstName;
    // $scope.secondName;
    // $scope.studentCardSeries;
    // $scope.studentCardNumber;
    // $scope.captchaText;
    // $scope.rememberMe;


    function isFormValid() {
      if ($scope.email !== '' &&
        $scope.password !== '' &&
        $scope.passwordRepeat !== '' &&
        $scope.firstName !== '' &&
        $scope.secondName !== '' &&
        $scope.studentCardSeries !== '' &&
        $scope.studentCardNumber !== '' &&
        $scope.captchaText !== '' &&
        $scope.rememberMe !== '') {
        return true;
      }
    }
    $scope.submitForm = function() {
      $scope.userBio = {
        email: $scope.email,
        password: $scope.password,
        passwordrepeat: $scope.passwordRepeat,
        firsName: $scope.firstName,
        lastName: $scope.secondName,
        cardSerries: $scope.studentCardSeries,
        cardNum: $scope.studentCardNumber,
        capca: $scope.captchaText,
        rememberMe: $scope.rememberMe
      };

      registration.query($scope.userBio).then(function(data) {
        $scope.registOk = angular.copy(data);

      });
      $location.path('/choice');
    };
  });
/*
ng-model='email'
ng-model='password'
ng-model='passwordRepeat'
ng-model='firstName'
ng-model='secondName'
ng-model='studentCardSeries'
ng-model='studentCardNumber'
ng-model="captcha-text"
ng-model="rememberMe"
*/
