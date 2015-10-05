'use strict'
/* global angular */

import SharedFlatService from './services/sharedFlatService'

var serviceNamespace = 'Roomies.services'

/** Loading modules */
angular.module(serviceNamespace, [])
 .factory('Roomies.SharedFlatService', SharedFlatService.sharedFlatFactory)

export default serviceNamespace
