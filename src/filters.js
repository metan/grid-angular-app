(function(){
	var app = angular.module('Filters', []);

	app.filter("asDate", function () {
		return function (input) {
			return new Date(input);
		}
	});	
	
})();
