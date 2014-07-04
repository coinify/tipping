angular.module('tipping').directive('coDeckgridElement', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
                    coData: '='
		},
		templateUrl: 'directive/co-deckgrid-element/co-deckgrid-element.html',
		link: function(scope, element, attrs, fn) {


		}
	};
});
