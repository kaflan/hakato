'use strict';

/**
 * @ngdoc service
 * @name hakaton2App.getUsers
 * @description
 * # getUsers
 * Factory in the hakaton2App.
 */
angular.module('hakaton2App')
  .factory('getUsers', function() {
    // Public API here
    return {
      query: function(seriesNumber, seriesName, number, callback) {
        if (seriesName === "" || number === "" || seriesNumber === "")
          return callback(null);
        else
          return callback({
            "nameSeria": seriesName,
            'nuberSeria': seriesNumber,
            "number": number
          });
      }
    }
  });
