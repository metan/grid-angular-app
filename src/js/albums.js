require('../filters');
require('./loader');

(function(){
	var app = angular.module('Albums', ['Filters', 'Loader']);

	app.directive('albumRow', function() {
		return {
			replace: true,
			templateUrl: './src/templates/albums/album.html'
		}
	});	

	app.controller("AlbumsCtrl", function($scope, $http)
	{
		$scope.sortType = 'date'; 
  		$scope.sortReverse = false;

		setTimeout(function(){
			$http.get('./data.json').success(function(data) {
				for(var i = 0; i < data.length; i++) {
					data[i].production_date = new Date(data[i].production_date);
				}
				$scope.albums = data;
			});
		}, 5000);
	});
})();