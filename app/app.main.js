import { default as Controllers } from './app.modules'
import { default as Routes } from './app.routes'
import { default as Services } from './app.services'

var appName = 'Roomies';

var app = angular.module(appName, ['ui.router', Controllers, Services])
  .config(Routes);

export default appName
