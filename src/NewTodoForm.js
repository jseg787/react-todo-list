import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ text: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log('here');
		this.props.add({ text: this.state.text, id: uuidv4() });
		this.setState({ text: '' });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					name="text"
					placeholder="new todo"
					value={this.state.text}
					onChange={this.handleChange}
				/>
				<button>Add Todo</button>
			</form>
		);
	}
}

export default NewTodoForm;
