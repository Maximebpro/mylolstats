'use strict';

angular.module('mylolstats')
.controller('HomeCtrl', function($scope, $state) {

    $scope.load = function(summoner) {
      window.localStorage.name = summoner.name;
      $state.go('profile');
    };

})