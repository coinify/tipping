angular.module('tipping').directive('coTransactions', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'directive/co-transactions/co-transactions.html',
		link: function(scope, element, attrs, fn) {
                    scope.items = [{
                        title: 'Bla bla',
                        address: '#424134512313123',
                        value: '0,241 ETH'
                    },{
                        title: 'Bla bla',
                        address: '#424134512313123',
                        value: '0,241 ETH'
                    },{
                        title: 'Bla bla',
                        address: '#424134512313123',
                        value: '0,241 ETH'
                    },{
                        title: 'Bla bla',
                        address: '#424134512313123',
                        value: '0,241 ETH'
                    },{
                        title: 'Bla bla',
                        address: '#424134512313123',
                        value: '0,241 ETH'
                    }];
		}
	};
});
