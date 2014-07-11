angular.module('tipping').directive('coCharts', function() {
	return {
		restrict: 'E',
		scope: {

		},
		templateUrl: 'directive/co-charts/co-charts.html',
		link: function(scope, element, attrs, fn) {
                    scope.config = {
                        innerRadius: '65%',
                        tooltips: false,
                        labels: false
                    };

                    scope.charts = _.map([{
                        title: 'Boost posts',
                        value: 63
                    },{
                        title: 'Your rate',
                        value: 34
                    },{
                        title: 'Your profit',
                        value: 81
                    },{
                        title: 'Like post',
                        value: 10
                    },{
                        title: 'Share post',
                        value: 40
                    }], function (object) {
                        return {
                            data: {
                                data: [{
                                    y: [object.value]        
                                }, {
                                    y: [100 - object.value]
                                }]
                            },
                            title: object.title,
                            value: object.value
                        };
                    });
		}
	};
});
