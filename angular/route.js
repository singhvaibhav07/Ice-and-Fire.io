app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/books',{
		templateUrl : 'views/allBooks.html',
		controller : 'bookController',
		controllerAs : 'bookCtrl'
	})
	.when('/books/:id1',{
		templateUrl : 'views/bookDetailView.html',
		controller : 'bookViewController',
		controllerAs : 'bookVeCtrl'
	})
	.when('/characters',{
		templateUrl : 'views/allChar.html',
		controller : 'charController',
		controllerAs : 'charCtrl'
	})
	.when('/characters/:id2',{
		templateUrl : 'views/singleChar.html',
		controller : 'singleCharController',
		controllerAs : 'sinChCtrl'
	})
	.when('/houses',{
		templateUrl : 'views/allHouse.html',
		controller : 'houseController',
		controllerAs : 'houseCtrl'
	})
	.when('/houses/:id3',{
		templateUrl : 'views/singleHouse.html',
		controller : 'singleHouse',
		controllerAs : 'sinHou'
	})
	.otherwise({
		redirectTo : '/'
	});
}]);