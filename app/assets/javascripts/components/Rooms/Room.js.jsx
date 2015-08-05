var Room = React.createClass({
		componentDidMount: function() {
			var socket = io('localhost:5001')
			var self = this
			var room = this.props.url
			
			socket.on('usercount-'+room, function(userCount) {
				//TODO
				console.log('usercount for: ' + self.props.name + ' : ' + userCount)
			});
		},

		// TODO: RENDER USERS COUNT FOR EACH ROOM
		render: function() {
			var url = '/chatrooms/' + this.props.url
			return (
				<a className="chatroomItem" href={url}>
					<div>

						<li>{this.props.name}<br/>
							<span className="userCount">{this.props.users}</span>
						</li>

					</div>
				</a>
			);
		}
});