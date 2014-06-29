
exports.configSockets = function (io) {
    
    io.on('connection', function (socket) {
        console.log('socket user connected');
        socket.on('disconnect', function () {
            console.log('socket user disconnected');
        });
    });
};

