import React, { Component } from 'react';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.remove(this.props.id);
	}

	render() {
		return (
			<div>
				<div>
					{this.props.text} <button onClick={this.handleClick}>Delete</button>
				</div>
			</div>
		);
	}
}

export default Todo;
