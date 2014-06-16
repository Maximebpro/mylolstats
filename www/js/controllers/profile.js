'use strict';

angular.module('mylolstats')
  .controller('ProfileCtrl', function($scope, $http) {

    $scope.summoner = {
      'name' : window.localStorage.name
    };

    var region = 'euw';
    var base_url = 'https://'+ region +'.api.pvp.net';
    var api_key = '0f981cfd-ff48-43ad-88f8-993d229dc7da';


    // Summoner ID and basic infos
    $http.get(base_url + '/api/lol/'+ region +'/v1.4/summoner/by-name/' + $scope.summoner.name + '?api_key=' + api_key)
      .success(function(data)
      {
        var summoner = data[$scope.summoner.name.toLowerCase()];

        $scope.summoner.id = summoner.id;
        $scope.summoner.name = summoner.name;
        $scope.summoner.profileIconId = summoner.profileIconId;
        $scope.summoner.summonerLevel = summoner.summonerLevel;


        // Summoner stats summary
        $http.get(base_url + '/api/lol/'+ region +'/v1.3/stats/by-summoner/' + $scope.summoner.id + '/summary?api_key=' + api_key)
          .success(function(data)
          {
            $scope.summoner.summary = data.playerStatSummaries;
          });
      });



  });