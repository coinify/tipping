angular.module('tipping').directive('coDeckgridElement', function() {
	return {
		restrict: 'E',
		scope: {
                    coData: '=',
                    coSize: '='
		},
		templateUrl: 'directive/co-deckgrid-element/co-deckgrid-element.html',
		link: function(scope, element, attrs, fn) {


		}
	};
});
