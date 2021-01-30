import React, { Component } from 'react';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: this.props.text,
			isEditing: false
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
	}

	handleClick() {
		this.props.remove(this.props.id);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.update(this.props.id, this.state.text);
		this.setState({ isEditing: false });
	}

	handleChange(e) {
		this.setState({ text: e.target.value });
	}

	toggleEdit() {
		this.setState({ isEditing: !this.state.isEditing });
	}

	render() {
		let result;
		if (this.state.isEditing) {
			result = (
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.text} onChange={this.handleChange} />
					<button>Save</button>
				</form>
			);
		} else {
			result = (
				<div>
					<div>{this.props.text}</div>
					<div>
						<button onClick={this.handleClick}>Delete</button>
						<button onClick={this.toggleEdit}>Edit</button>
					</div>
				</div>
			);
		}
		return result;
	}
}

export default Todo;
