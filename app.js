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
        url: '/dashboard',
        state: 'dashboard',
        view: 'main',
        templateUrl: 'partial/dashboard/dashboard.html'
    }]);

    
    /* Add New States Above */
    $urlRouterProvider.otherwise('/dashboard');

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
