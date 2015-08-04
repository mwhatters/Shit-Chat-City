var RoomForm = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
		var name = React.findDOMNode(this.refs.name).value.trim();
		var password = React.findDOMNode(this.refs.password).value.trim();
		if (!name || !password) {
			return false;
		}

		this.props.onChatroomSubmit({name: name, password: password})

		React.findDOMNode(this.refs.name).value = '';
		React.findDOMNode(this.refs.password).value = '';
	},

	render: function() {
		return (
			<form ref="form" className="RoomForm" method="post" onSubmit={this.handleSubmit} >
				<input type="text" name="chatroom[name]" placeholder="Name" ref="name" /><br/>
				<input type="password" name="chatroom[password]" placeholder="Password" ref="password" /><br/>
				<input type="submit" style={form.button} value="Create Room!" />
			</form>
		);
	}
})