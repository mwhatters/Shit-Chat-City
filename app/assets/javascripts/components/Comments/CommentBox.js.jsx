//= require ./CommentForm
//= require ./CommentList


var CommentBox = React.createClass({
  getInitialState: function() {
    return JSON.parse(this.props.comment_presenter)
  },

  // One way data stream
  handleCommentSubmit: function(formData) {
    $.ajax({
      url: '/comments',
      data: formData,
      type: 'POST',
    });
  },

  addComment: function(data) {
    this.setState({comments: data})
  },

  // TODO -- namespacing socket.io
  componentDidMount: function() {
    var socket = io('localhost:5001')
    var self = this
    socket.on('comment-created', function(data) {
      self.addComment(data)
    })
  },

  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList comments={this.state.comments} />
        <h3>Add a Comment</h3>
        <CommentForm form={this.state.form} onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }

});