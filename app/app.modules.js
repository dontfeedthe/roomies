'use strict'
/* global angular */

import ShopListController from './bundles/shoplist/shoplist.controller'

var controllersNamespace = 'Roomies.controllers'

/** Loading modules */
angular.module(controllersNamespace, [])
 .controller('Roomies.shopListController', ShopListController)

export default controllersNamespace
