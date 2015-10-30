import { default as Controllers } from './app.modules'
import { default as Routes } from './app.routes'
import { default as Services } from './app.services'
import { default as Factories } from './app.factories'

var appName = 'Roomies'

angular.module(appName, ['ui.router', 'openlayers-directive', Controllers, Services, Factories])
  .config(Routes)

export default appName
