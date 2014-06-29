angular.module('tipping').factory('Chat',function(Socket) {

	var Chat = {
            socket: Socket,
            sendMessage: function (message) {
                Socket.emit('chat.message', message);
            },
            onMessage: function (callback) {
                Socket.on('chat.message', callback);           
            }
        };

	return Chat;
});
