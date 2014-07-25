angular.module('tipping').controller('LeftbarCtrl',function($scope, $location){

    $scope.sections = [{
        title: 'Dashboard',
        image: '/res/navi_dashboard.png',
        link: 'leftbar.dashboard.tabs.channel({channel:"global"})',
        key: 'dashboard'
    },{
        title: 'Wallet',
        image: '/res/navi_wallet.png',
        link: 'leftbar.wallet',
        key: 'wallet'
    },{
        title: 'Reputation',
        image: '/res/navi_reputation.png',
        link: 'leftbar.reputation',
        key: 'reputation'
    },{
        title: 'Settings',
        image: '/res/navi_settings.png',
        link: 'leftbar.settings',
        key: 'settings'
    }];
});

