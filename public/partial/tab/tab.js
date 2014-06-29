angular.module('tipping').controller('TabCtrl',function($scope, $stateParams, Chat){
    $scope.channel = $stateParams.channel;
    $scope.messages = [];
    
    Chat.onMessage( function (message) {
        $scope.messages.push(message);
    });

    $scope.sendMessage = function () {
        Chat.sendMessage( $scope.inputMessage);
        $scope.inputMessage = '';
    };
});
