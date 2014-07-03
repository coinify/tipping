angular.module('tipping').directive('coChat', function(Chat) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
                    
		},
		templateUrl: 'directive/co-chat/co-chat.html',
		link: function(scope, element, attrs, fn) {
                    scope.messages = [];
                    Chat.onMessage( function (message) {
                        scope.messages.push(message);
                    });

                    scope.sendMessage = function () {
                        Chat.sendMessage({
                            text: scope.inputMessage,
                            time: new Date()
                        });
                        scope.inputMessage = '';
                    };

		}
	};
});
