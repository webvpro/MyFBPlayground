'use strict';

angular.module('MyFBPlaygroundApp')
  .controller('LoginController', function($scope, simpleLogin) {
    $scope.pass = null;
    $scope.err = null;
    $scope.user = null;

    $scope.login = function(service) {
      simpleLogin.login(service, function(err) {
        $scope.err = err? err + '' : null;
      });
    };
        $scope.logout = function(service) {
            simpleLogin.logout();
        };


  });
