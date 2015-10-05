import { default as Controllers } from './app.modules'
import { default as Routes } from './app.routes'

var appName = 'Roomies';

var app = angular.module(appName, ['ui.router', Controllers])
  .config(Routes);
  
export default appName
