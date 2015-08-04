var io = require('socket.io').listen(5001)
redis = require('redis').createClient();



redis.subscribe('comment-created')
redis.subscribe('room-created')

io.sockets.setMaxListeners(20)

io.on('connection', function(socket) {
	redis.on('comment-created', function(channel, message){
		var data = JSON.parse(message)
		var comments = data.slice(1)
		var room = data[0].url
		console.log(comments)
		// socket.join(room);
		socket.emit(room, comments)
		}
	);
});



// 		socket.emit('comment-created', data);
