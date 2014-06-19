angular.module('tipping').controller('QuoteDetailsCtrl',function($scope, $stateParams, Blockchain){
    $scope.quote = Blockchain.quoteFromAddress($stateParams.address);

});
