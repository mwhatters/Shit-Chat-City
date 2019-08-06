//= require ./Comment

var CommentList = createReactClass({
	render: function() {
		var commentNodes = this.props.comments.map(function (comment) { 
		return (
			<Comment author={comment.author} content={comment.content} key={comment.id} >
			</Comment>
		);
	})
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
}); 