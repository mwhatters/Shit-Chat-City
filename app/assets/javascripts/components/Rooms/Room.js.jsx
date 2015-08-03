var Room = React.createClass({
		render: function() {
			var url = '/chatrooms/' + this.props.url
			return (
				<div>
					<li><a href={url}>{this.props.name}</a></li>
				</div>
			);
		}
});