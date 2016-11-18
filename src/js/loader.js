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
