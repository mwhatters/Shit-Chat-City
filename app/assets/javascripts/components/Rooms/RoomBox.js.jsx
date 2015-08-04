//= require ./RoomList
//= require ./Room
//= require_tree ../styles


var RoomBox = React.createClass({
	getInitialState: function() {
		return JSON.parse(this.props.room_presenter)
	},

	handleChatroomSubmit: function(formData) {
		$.ajax({
			url: '/chatrooms',
			data: formData,
			method: 'POST',
		});
	},

	addChatroom: function(data) {
		this.setState({chatrooms: data})
	},

	componentDidMount: function() {
	  var socket = io('localhost:5001')
	  var self = this
	  
	  socket.on('room-created', function(data) {
	    console.log('I recieved room data')
	    self.addChatroom(data)
	  });
	},

	render: function() {
		return (
			<div className="roomBox">
				<h1>Welcome to SHIT CHAT CITY</h1>
				<RoomList chatrooms={this.state.chatrooms } />
				<h2>Create your Own Shit Room!</h2>
				<p>Make sure you remember the password you shitter, as it is your only means of proving ownership</p>
				<RoomForm form={this.state.form} onChatroomSubmit={this.handleChatroomSubmit} />
			</div>
		);
	}
});