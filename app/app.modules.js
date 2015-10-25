'use strict'
/* global angular */

import HomeController from './bundles/home/home.controller'

var controllersNamespace = 'Roomies.controllers'

/** Loading modules */
angular.module(controllersNamespace, [])
  .controller('Roomies.HomeController', HomeController)

export default controllersNamespace
