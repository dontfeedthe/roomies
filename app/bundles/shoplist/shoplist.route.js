'use strict'

angular.module('Roomie', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('shoplist', {
        url : "/shop",
        templateUrl : "partials/state1.html"
    })
  })
