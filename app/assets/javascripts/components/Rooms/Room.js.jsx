var Room = React.createClass({
		render: function() {
			var url = '/chatrooms/' + this.props.url
			return (
				<a className="chatroomItem" href={url}>
				<div>
					<li>{this.props.name}</li>
				</div>
				</a>
			);
		}
});