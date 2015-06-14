var app = angular.module("mikeSellsMinis", ['ui.router']);


app.factory('offerFactory', ['$http', function($http){
	var o = {
		offers: []
	};
	
	o.getAll = function() { 
		$http.get('/offers').success(function(data){
			angular.copy(data, o.offers);
		}); 
	};

	o.create = function(offer) {
		return $http.post('/offers', offer).success(function(data) {
			o.offers.push(data);
		});
	};

	return o;
}]);


app.controller('mikeSellsMinis_MainCtrl', ['$scope', '$stateParams', 'offerFactory',  function($scope, $stateParams, offerFactory){

	$scope.offers = offerFactory.offers;

}]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	
	var home = {
		name: 'home',
		url: '/',
		templateUrl: 'home.html',
		controller: 'mikeSellsMinis_MainCtrl',
		resolve: {
			
			offersPromise: [ 'OffersFactory', function(offers) {
				return offers.getAll();
			}]
		}
	};
	
	$stateProvider.state(home);
	
	//$urlRouterProvider.otherwise('home');
}]);

app.run(['$state', function($state){
	
	$state.transitionTo('home');
	
}]);
