var io = require('socket.io').listen(5001)
var redis = require('redis')
var commentClient = redis.createClient();
var roomClient    = redis.createClient();


commentClient.subscribe('comment-created')
roomClient.subscribe('room-created')

io.sockets.setMaxListeners(20)

io.on('connection', function(socket) {

	commentClient.on('message', function(channel, commentList){
		console.log('comments recieved')
		var data = JSON.parse(commentList)
		
		var comments = data.slice(1)
		var room = data[0].url
		socket.emit(room, comments)
		}
	);

	roomClient.on('message', function(channel, roomList) {
		console.log('room-created message recieved')

		var data = JSON.parse(roomList)
		socket.emit('room-created', data);
		}
	);

});