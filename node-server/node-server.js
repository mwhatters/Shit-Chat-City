var io = require('socket.io').listen(5001)
var redis = require('redis')
var commentClient = redis.createClient();
var roomClient    = redis.createClient();


commentClient.subscribe('comment-created')
roomClient.subscribe('room-created')

io.sockets.setMaxListeners(20)

io.on('connection', function(socket) {

	commentClient.on('message', function(channel, message){
		var data = JSON.parse(message)
		var comments = data.slice(1)
		var room = data[0].url
		console.log(comments)
		// socket.join(room);
		socket.emit(room, comments)
		}
	);

	roomClient.on('message', function(channel, roomlist) {
		console.log('room-created message recieved')
		console.log(roomlist)
		socket.emit('room-created', roomlist);
		}
	);

});