angular.module('tipping', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('tipping').config(function($stateProvider, $urlRouterProvider) {

    var registerSubstateInView = function (state, substates) {
        substates.forEach(function (substate) {
            var hash = {};
            hash.url = substate.url;
            hash.views = {};
            hash.views[substate.view] = {
                templateUrl: substate.templateUrl
            };
            $stateProvider.state(state + '.' + substate.state, hash);
        });
    };

    $stateProvider.state('leftbar', {
        templateUrl: 'partial/leftbar/leftbar.html'
    });

    registerSubstateInView('leftbar', [{
        state: 'dashboard',
        view: 'main',
        templateUrl: 'partial/dashboard/dashboard.html'
    }]);

    registerSubstateInView('leftbar.dashboard', [{
        url: '/dashboard',
        state: 'tabs',
        view: 'tabs',
        templateUrl: 'partial/dashboard-tabs/dashboard-tabs.html'
    }]);

    registerSubstateInView('leftbar.dashboard.tabs', [{
        url: '/:channel',
        state: 'channel',
        view: 'tab',
        templateUrl: 'partial/tab/tab.html'
    }]);

    
    /* Add New States Above */
    $urlRouterProvider.otherwise('/dashboard/global');

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
