var io = require('socket.io').listen(5001)
redis = require('redis').createClient();
redis.subscribe('comment-created')

io.on('connection', function(socket) {
	redis.on('message', function(channel, message){
		var data = JSON.parse(message)
		socket.emit('comment-created', data);
		}
	);
});

