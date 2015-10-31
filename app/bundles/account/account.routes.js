export default [{
  state: 'account',
  options: {
    url: '/login',
    templateUrl: 'app/bundles/home/partials/wrapper.html',
    controller: 'Roomies.AccountController',
    controllerAs: 'ctrl'
  }
},
{
  state: 'account.facebook',
  options: {
    url: '/facebook'
  }
},
{
  state: 'account.welcome',
  options: {
    url: '/welcome',
    views: {
      'content': { templateUrl: 'app/bundles/account/partials/welcome.html' }
    }
  }
}]
