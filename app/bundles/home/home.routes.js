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
  state: 'default',
  options: {
    url: '/',
    templateUrl: 'app/bundles/home/partials/login.html',
    controller: 'Roomies.HomeController',
    controllerAs: 'ctrl'
  }
},
{
  state: 'home.news',
  options: {
    url: '/news',
    views: {
      'content': { templateUrl: 'app/bundles/home/partials/home.news.html' }
    }
  }
}, {
  state: 'home.list',
  options: {
    url: '/list',
    views: {
      'content': { templateUrl: 'app/bundles/home/partials/home.list.html' }
    }
  }
},
{
  state: 'welcome',
  options: {
    url: '/welcome',
    templateUrl: 'app/bundles/home/partials/welcome.html',
    controller: 'Roomies.HomeController',
    controllerAs: 'ctrl'
  }
},
{
  state: 'sharedflat',
  options: {
    url: '/flat',
    templateUrl: 'app/bundles/home/partials/wrapper.html',
    controller: 'Roomies.HomeController',
    controllerAs: 'ctrl'
  }
},
{
  state: 'sharedflat.find',
  options: {
    url: '/find',
    views: {
      'content': { templateUrl: 'app/bundles/home/partials/find.html' }
    }
  }
},
{
  state: 'sharedflat.new',
  options: {
    url: '/new',
    views: {
      'content': { templateUrl: 'app/bundles/home/partials/new.html' }
    }
  }
}, {
  state: 'events',
  options: {
    url: '/events',
    templateUrl: 'app/bundles/home/partials/index.html',
    controller: 'Roomies.HomeController',
    controllerAs: 'ctrl'
  }
}, {
  state: 'events.view',
  options: {
    url: '/view',
    views: {
      'content': { templateUrl: 'app/bundles/home/partials/events.view.html' }
    }
  }
}]
