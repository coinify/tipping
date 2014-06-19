angular.module('tipping').controller('TransactionsCtrl',function($scope, Blockchain){
    $scope.transactions = Blockchain.transactions;

});
