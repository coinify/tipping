angular.module('tipping').directive('coDeckgrid', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'directive/co-deckgrid/co-deckgrid.html',
		link: function(scope, element, attrs, fn) {
                    scope.mainItem = 'Super';
                    scope.secondItems = [
                        'Second',
                        'Third'
                    ];
                    scope.restItems = [
                        'Four',
                        'Five',
                        'Six',
                        'Seven',
                        'Eight',
                        'Nine',
                        'Ten',
                        'Eleven'
                    ];
		}
	};
});
