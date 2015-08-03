var CommentForm = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
		var author = React.findDOMNode(this.refs.author).value.trim();
		var content = React.findDOMNode(this.refs.content).value.trim();
		if (!content || !author) {
			return false;
		}
		// TODO: SEND request to server
		this.props.onCommentSubmit({author: author, content: content})

		// React.findDOMNode(this.refs.author).value = '';
		React.findDOMNode(this.refs.content).value = '';
	},

	render: function() {
		return (
			<form ref="form" className="CommentForm" method="post" onSubmit={this.handleSubmit} >
				<input type="text" name="comment[author]" placeholder="Your name" ref="author"/><br/>
				<textarea type="text" rows="10" cols="30" name="comment[content]" placeholder="Say something." ref="content"></textarea><br/>
				<input type="submit" value="Post" />
			</form>
		);
	}
});