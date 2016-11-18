require('./js/albums');

(function(){
	var app = angular.module('Grid', ['ngRoute', 'Albums'])
			.config(function($routeProvider) {
				$routeProvider.when('/albums', {
					templateUrl: './src/templates/albums'
				})
				.when('/', {
					templateUrl: './src/templates/home'
				})
				.otherwise({ redirectTo: '/' });
			});
})();
