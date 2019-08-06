var RoomList = createReactClass({
	render: function(){
		var roomNodes = this.props.chatrooms.map(function(room) {
			return (
				<Room name={room.name} url={room.url} key={room.id} >
				</Room>
			);
		});
			return (
				<div className="roomList">
					{roomNodes}
				</div>
		);
	}

});