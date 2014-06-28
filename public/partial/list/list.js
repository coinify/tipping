angular.module('tipping').controller('ListCtrl',function($scope, Blockchain){
    $scope.quotes = Blockchain.quotes;
    
    $scope.increase = function (quote) {
        Blockchain.addOutgoingTransaction(quote, 1);
    };

});
