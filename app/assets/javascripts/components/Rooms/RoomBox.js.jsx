//= require ./RoomList
//= require ./Room

var RoomBox = React.createClass({

	getInitialState: function() {
		return JSON.parse(this.props.room_presenter)
	},

	render: function() {
		return (
			<div className="roomBox">
				<h1>Welcome to SHIT CHAT CITY</h1>
				<RoomList chatrooms={this.state.chatrooms } />
			</div>
		);
	}
});