angular.module('tipping').controller('AccountCtrl',function($scope, Blockchain){        
    $scope.account = Blockchain.account;
});
