'use strict'
import BundleRoutes from './bundles/bundles.routes'

function init ($stateProvider, $urlRouterProvider) {
  // Default route
  $urlRouterProvider.otherwise('/')

  for (var i = 0; i < BundleRoutes.length; i++) {
    $stateProvider
      .state(BundleRoutes[i].state, BundleRoutes[i].options)
  }
}

init.$inject = ['$stateProvider', '$urlRouterProvider']

export default init
