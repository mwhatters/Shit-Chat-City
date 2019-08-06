//= require ./CommentForm
//= require ./CommentList
//= require_tree ../styles

var CommentBox = createReactClass({
  getInitialState: function() {
    return JSON.parse(this.props.comment_presenter)
  },

  // One way data stream!
  handleCommentSubmit: function(formData) {
    var chatKey = JSON.parse(this.props.comment_presenter).chatroom.url
    $.ajax({
      url: '/chatrooms/'+chatKey+'/comments',
      data: formData,
      type: 'POST',
    });
  },

  addComment: function(data) {
    this.setState({comments: data})
  },

  // TODO -- namespacing socket.io
  componentDidMount: function() {
    // var socket = io('https://ssc-node.herokuapp.com')
    var socket = io('localhost:5001')
    var self = this
    var room = JSON.parse(self.props.comment_presenter).chatroom.url

    socket.emit('room-joined', room);
    
    socket.on(room, function(data) {
      console.log('I recieved data')
      self.addComment(data)
    })
  },

  componentWillUnmount: function() {
    var socket = io('localhost:5001')
    var self = this
    var room = JSON.parse(self.props.comment_presenter).chatroom.url
    
    console.log('room left')
    socket.emit('room-left', room);
  },

  render: function() {
    var chatroom = JSON.parse(this.props.comment_presenter).chatroom.name
    return (
      <div className="commentBox">
        <h1>{chatroom}</h1>
        <CommentList comments={this.state.comments} />
        <CommentForm form={this.state.form} onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }

});