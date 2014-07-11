angular.module('tipping').directive('coCharts', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'directive/co-charts/co-charts.html',
		link: function(scope, element, attrs, fn) {
                    scope.config = {
                        innerRadius: '60%'
                    };

                    scope.data = {
                        data: [{
                            y: [100]
                        },{
                            y: [150]
                        }]  
                    };
		}
	};
});
