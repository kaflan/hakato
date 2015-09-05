'use strict';

/**
 * @ngdoc service
 * @name hakaton2App.registration
 * @description
 * # registration
 * Factory in the hakaton2App.
 */
angular.module('hakaton2App')
  .factory('registration', function() {
    // Service logic
    // ...
    var user = {
      user: true
    };
    // Public API here
    return {
      query: function(obj) {
        return user;
      }
    };
  });
