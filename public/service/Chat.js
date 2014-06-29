angular.module('tipping').factory('Chat',function(Socket) {

	var Chat = {
            socket: Socket
        };

	return Chat;
});
