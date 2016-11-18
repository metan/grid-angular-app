(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./js/albums":3}],2:[function(require,module,exports){
(function(){
	var app = angular.module('Filters', []);

	app.filter("asDate", function () {
		return function (input) {
			return new Date(input);
		}
	});	
	
})();

},{}],3:[function(require,module,exports){
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
},{"../filters":2,"./loader":4}],4:[function(require,module,exports){
(function(){
    angular.module('Loader', [])
    .directive('ngLoading', function ($compile) {
        return {
            link: function (scope, elem, attrs) {
                elem.append('<div class="loading"></div>');
                scope.$watchCollection(attrs.ngLoading, function (val) {
                    if(val) {
                        elem.addClass('ngLoading-hide');
                        elem.removeClass('ngLoading-show');
                    } else {
                        elem.addClass('ngLoading-show'); 
                    }
                });
            }
        };
    });
})();

},{}]},{},[1]);
