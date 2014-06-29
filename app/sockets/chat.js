

var Chat = {
    onChatMessage: function (io, socket) {
        return function (data, res) {
            io.emit('chat.message', data);
        };
    }
};

module.exports = Chat;
