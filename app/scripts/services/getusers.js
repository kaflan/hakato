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
      query: function(name, number, callback) {
        if (name === "" || number === "")
          return callback(null);
        else
          return callback({
            "name": name,
            "number": number
          });
      }
    }
  });
