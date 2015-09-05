'use strict';

/**
 * @ngdoc service
 * @name hakaton2App.getTiket
 * @description
 * # getTiket
 * Factory in the hakaton2App.
 */
angular.module('hakaton2App')
  .factory('getTicket', function() {
    // Service logic
    var tiketInfo = {
      ticket: true
    };
    // Public API here
    return {
      query: function(tiket) {
        return tiketInfo;
      }
    };
  });
