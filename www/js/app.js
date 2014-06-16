'use strict';

angular
  .module('mylolstats', ['ionic', 'ui.router'])

  .constant('apiServerUrl', 'https://euw.api.pvp.net')
  .constant('apiServerKey', '0f981cfd-ff48-43ad-88f8-993d229dc7da')

  .config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
        url: "/",
        controller: 'HomeCtrl',
        templateUrl: "views/home.html"
      })
      .state('profile', {
        url: "/profile?id",
        controller: 'ProfileCtrl',
        templateUrl: "views/profile.html"
      });
  })

  .run(function($ionicPlatform, $rootScope, $log, $state, $location) {

    $rootScope.$log = $log;
    $rootScope.$state = $state;

    $rootScope.currentUrl = $location.absUrl();
    var tmpUrlArr = $rootScope.currentUrl.split('#');
    $rootScope.currentUrl = tmpUrlArr[0];
    $rootScope.currentUrl = $rootScope.currentUrl.substring(0, $rootScope.currentUrl.length - 1);


    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })