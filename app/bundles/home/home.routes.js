export default [{
  state: 'home',
  options: {
    url: '/home',
    templateUrl: 'app/bundles/home/partials/index.html',
    controller: 'Roomies.HomeController',
    controllerAs: 'ctrl'
  }
},
{
  state: 'login',
  options: {
    url: '/login',
    templateUrl: 'app/bundles/home/partials/login.html',
    controller: 'Roomies.HomeController',
    controllerAs: 'ctrl'
  }
}]
