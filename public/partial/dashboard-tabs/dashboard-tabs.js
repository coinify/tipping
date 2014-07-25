angular.module('tipping').controller('DashboardTabsCtrl',function($scope, $location){

    $scope.links = [{
        title: 'general',
        subtitle: 'global conversation'
    }, {
        title: 'friends',
        subtitle: 'people i trust'
    }];
});
