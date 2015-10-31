'use strict'
import HomeList from './home/home.routes'
import AccountRoutes from './account/account.routes'

var Routes = []
  .concat(HomeList)
  .concat(AccountRoutes)

export default Routes
