import React, { Component } from 'react';

class Todo extends Component {
	render() {
		return (
			<div>
				<div>{this.props.text}</div>
			</div>
		);
	}
}

export default Todo;
