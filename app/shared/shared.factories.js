'use strict'
/* global angular */

import FacebookFactory from './factories/facebookFactory'

var serviceNamespace = 'Roomies.factory'

/** Loading modules */
angular.module(serviceNamespace, [])
 .factory('Roomies.facebook', FacebookFactory.sharedFacebookFactory)

export default serviceNamespace
