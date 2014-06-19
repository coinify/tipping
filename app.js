angular.module('tipping', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('tipping').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('index', {
        templateUrl: 'partial/index/index.html'
    });
    $stateProvider.state('index.list', {
        url: '/list',
        views: {
            content: {
                templateUrl: 'partial/list/list.html'
            }
        }

    });
    $stateProvider.state('index.quote_details', {
        url: '/:address',
        views: {
            content: {
                templateUrl: 'partial/quote_details/quote_details.html'
            }
        }
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/list');

});

angular.module('tipping').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
