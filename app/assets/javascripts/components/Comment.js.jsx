var Comment = React.createClass({
	render: function() {
		return (
			<div>
				<h2>{this.props.author}</h2>
				<p>{this.props.content}</p>
			</div>
		);
	}
});