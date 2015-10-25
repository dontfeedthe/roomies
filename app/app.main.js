import { default as Controllers } from './app.modules'
import { default as Routes } from './app.routes'
import { default as Services } from './app.services'

var appName = 'Roomies'

angular.module(appName, ['ui.router', 'openlayers-directive', Controllers, Services])
  .config(Routes)

export default appName
