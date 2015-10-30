'use strict'
/* global angular */

import SharedFlatService from './services/sharedFlatService'
import UserService from './services/userService'

var serviceNamespace = 'Roomies.services'

/** Loading modules */
angular.module(serviceNamespace, [])
 .factory('Roomies.SharedFlatService', SharedFlatService.sharedFlatFactory)
 .factory('Roomies.UserService', UserService.userServiceFactory)

export default serviceNamespace
