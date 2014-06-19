angular.module('tipping').controller('ListCtrl',function($scope, Blockchain){
    $scope.quotes = Blockchain.quotes;

});
