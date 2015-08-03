var Comment = React.createClass({
	render: function() {
		return (
			<div>
				<li><b>{this.props.author}</b>: <span>{this.props.content}</span></li>
			</div>
		);
	}
});