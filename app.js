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
    $stateProvider.state('index.help', {
        url: '/help/:p',
        views: {
            content: {
                templateUrl: 'partial/help/help.html'
            }
        }

    });
    $stateProvider.state('index.transactions', {
        url: '/transactions/:p',
        views: {
            content: {     
                templateUrl: 'partial/transactions/transactions.html'
            }
        }
    });
    $stateProvider.state('index.notifications', {
        url: '/notications/:p',
        views: {
            content: {
                templateUrl: 'partial/notifications/notifications.html'
            }
        }
    });
    $stateProvider.state('index.account', {
        url: '/account/:address',
        views: {
            content: {
                templateUrl: 'partial/account/account.html'
            }
        }
    });
    $stateProvider.state('index.add_quote', {
        url: '/add_quote/:p',
        views: {
            content: {
                templateUrl: 'partial/add_quote/add_quote.html'
            }
        }
    });
    $stateProvider.state('index.about', {
        url: '/about/:p',
        views: {
            content: {
                templateUrl: 'partial/about/about.html'
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
