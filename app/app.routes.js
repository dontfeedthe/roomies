function init ($stateProvider, $urlRouterProvider) {

	// Default route
	$urlRouterProvider.otherwise("/shoplist");

	$stateProvider
		.state('shoplist', {
			url: "/shoplist",
			templateUrl: "app/bundles/shoplist/partials/list.html",
			controller:'Roomies.shopListController',
			controllerAs:'ctrl'
		})
}

init.$inject = ['$stateProvider', '$urlRouterProvider']

export default init;