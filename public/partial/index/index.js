angular.module('tipping').controller('IndexCtrl',function($scope, Blockchain){
    $scope.account = Blockchain.account;
    $scope.index = {
        search: ''
    };

});
