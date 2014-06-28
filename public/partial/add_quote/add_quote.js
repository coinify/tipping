angular.module('tipping').controller('AddQuoteCtrl',function($scope, Blockchain){
    
    $scope.addQuote = function () {
        Blockchain.addQuote($scope.title, $scope.text);
        $scope.title = '';
        $scope.text = '';
    };
    
});
