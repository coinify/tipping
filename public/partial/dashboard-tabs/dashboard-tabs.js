angular.module('tipping').controller('DashboardTabsCtrl',function($scope, $location){

    $scope.links = [
        'global',
        'friends'
    ];

    $scope.isActivePath = function (link) {
        return _.contains($location.path(), link);
    };

});
