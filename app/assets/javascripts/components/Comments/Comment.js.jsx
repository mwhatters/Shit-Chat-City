var Comment = React.createClass({
	render: function() {
		return (
			<div className="Comment">
				<li><b>{this.props.author}</b> : <span>{this.props.content}</span></li>
			</div>
		);
	}
});

