angular.module('tipping').controller('LeftbarCtrl',function($scope, $location){

    $scope.sections = [{
        title: 'Dashboard',
        image: '',
        link: 'leftbar.dashboard.tabs.channel({channel:"global"})',
        key: 'dashboard'
    },{
        title: 'Wallet',
        image: '',
        link: 'leftbar.wallet',
        key: 'wallet'
    },{
        title: 'Reputation',
        image: '',
        link: 'leftbar.reputation',
        key: 'reputation'
    },{
        title: 'Settings',
        image: '',
        link: 'leftbar.settings',
        key: 'settings'
    }];
});

