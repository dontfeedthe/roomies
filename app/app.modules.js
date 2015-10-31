'use strict'
/* global angular */

import HomeController from './bundles/home/home.controller'
import AccountController from './bundles/account/account.controller'

var controllersNamespace = 'Roomies.controllers'

/** Loading modules */
angular.module(controllersNamespace, [])
  .controller('Roomies.HomeController', HomeController)
  .controller('Roomies.AccountController', AccountController)

export default controllersNamespace
